import { NextSeo } from 'next-seo'
import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import s from './p.module.css'
import { Product } from '@commerce/types/product'
import usePrice from '@commerce/product/use-price'
import { useAddItem } from '@framework/cart'
import { useUI, Text } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'
import Link from 'next/link'
import Button from '@components/ui/Button'
import Accordion from '@components/ui/Accordion'
import SliderCarousel from '../EmblaSlider/slider'
import { shimmer, toBase64 } from '@config/img-helpers'
import styled from 'styled-components'
import ProductCard from '../ProductCard'
import { ProductOptions } from '..'

interface ProductViewProps {
  product: Product
  relatedProducts: Product[]
  className?: string
}

const ProductView: FC<ProductViewProps> = ({ product, relatedProducts }) => {
  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0]?.id),
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  //@ts-ignore

  const images = product.images

  return (
    <section className={s.container}>
      <div className={s.productGrid}>
        <aside className={s.gridLeft}>
          <div className={s.gridLeftInner}>
            {product.images.map((image, i) => (
              <div className={s.gridImgContainer} key={i} data-scroll>
                <Image
                  priority={i === 0}
                  quality="100"
                  width={540}
                  height={810}
                  src={image.url}
                  alt={product.name || image.alt}
                  placeholder="blur"
                  className="a-img"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(540, 810)
                  )}`}
                />
              </div>
            ))}
          </div>

          <SliderCarousel product={images} />
        </aside>

        <aside className={s.gridRight}>
          <div>
            <div className={s.pinfo}>
              <h3 className={s.productTitle}>{product.name}</h3>
              <h3 className={s.productPrice}>{price}</h3>
            </div>

            <ProductOptions
              options={product.options}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />

            <Text
              className={s.productDesc}
              html={product.descriptionHtml || product.description}
            />

            <div className={s.btnContainer}>
              {process.env.COMMERCE_CART_ENABLED && (
                <Button
                  aria-label={`Add ${product.name} to your cart`}
                  type="button"
                  onClick={addToCart}
                  loading={loading}
                  className={s.button}
                  disabled={variant?.availableForSale === false}
                >
                  {variant?.availableForSale === false
                    ? 'Product not available'
                    : `Add To Cart - ${price}`}
                </Button>
              )}
            </div>
          </div>
        </aside>
      </div>

      <div className={s.rgridTitle}>
        <h3>
          <Link href="/search">
            <a>
              More
              <br />
              Products
            </a>
          </Link>
        </h3>
      </div>

      <ul className={s.rgrid}>
        {relatedProducts.map((p) => (
          <li key={p.path}>
            <ProductCard
              noNameTag
              product={p}
              variant="simple"
              imgProps={{
                width: 540,
                height: 810,
              }}
            />
          </li>
        ))}
      </ul>

      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          url: `https://masonutility.vercel.app/product/${product.slug}`,
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: 540,
              height: 840,
              alt: product.name,
            },
          ],
        }}
      />
    </section>
  )
}

export default ProductView

const List = styled.ul`
  li {
    margin-bottom: 4px;
    list-style: disc;
  }
`
