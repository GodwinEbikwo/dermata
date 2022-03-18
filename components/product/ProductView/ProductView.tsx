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
import SliderCarousel from '../EmblaSlider/slider'
import { shimmer, toBase64 } from '@config/img-helpers'
import { ProductOptions } from '..'
import { m } from 'framer-motion'
import { menuInOut } from '@config/transitions'

interface ProductViewProps {
  product: Product
  relatedProducts: Product[]
  className?: string
}

function Wrapper({ children }: any) {
  return <div className="relative overflow-hidden">{children}</div>
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
          <div data-scroll id="product-info">
            <div
              className={s.pinfo}
              data-scroll
              data-scroll-sticky="true"
              data-scroll-target="#product-info"
            >
              <Wrapper>
                <m.div variants={menuInOut}>
                  <h3 className={s.productTitle}>
                    <span>－</span>
                    {product.name}
                  </h3>
                </m.div>
              </Wrapper>

              <Wrapper>
                <m.div variants={menuInOut}>
                  <h3 className={s.productPrice}>{price}</h3>
                </m.div>
              </Wrapper>
            </div>

            <Wrapper>
              <m.div variants={menuInOut}>
                <ProductOptions
                  options={product.options}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </m.div>
            </Wrapper>

            <Wrapper>
              <m.div variants={menuInOut}>
                <Text
                  variant="paragraph"
                  className={s.productDesc}
                  html={product.descriptionHtml || product.description}
                />
              </m.div>
            </Wrapper>

            <Wrapper>
              <m.div variants={menuInOut}>
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
              </m.div>
            </Wrapper>
          </div>
        </aside>
      </div>

      <section className={s.related_products}>
        <div className={s.related_products_title}>
          <h3>
            <Link href="/search">
              <a>
                <span>－</span>Most viewed
              </a>
            </Link>
          </h3>
        </div>

        <div className="relative">
          <ul className={s.related_item_grid}>
            {relatedProducts.map((p) => (
              <li key={p.path} className={s.related_item}>
                <Link href={`/product/${p.slug}`}>
                  <a aria-label={p.name} data-scroll>
                    {p?.images && (
                      <Image
                        alt={p.name || 'Product Image'}
                        className="a-img"
                        src={p.images[0]?.url}
                        width={400}
                        height={600}
                        quality={100}
                        layout="responsive"
                      />
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
