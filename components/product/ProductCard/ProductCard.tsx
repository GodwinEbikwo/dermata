import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { Product } from '@commerce/types/product'
import s from './ProductCard.module.css'
import Image, { ImageProps } from 'next/image'
import usePrice from '@framework/product/use-price'

interface Props {
  className?: string
  product: Product
  noNameTag?: boolean
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>
  variant?: 'default' | 'slim' | 'simple'
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCard: FC<Props> = ({
  product,
  imgProps,
  className,
  noNameTag = false,
  variant = 'simple',
}) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  const rootClassName = cn(
    s.root,
    { [s.simple]: variant === 'simple' },
    className
  )

  const simpleClassName = cn(className, {})

  return (
    <Link href={`/product/${product.slug}`}>
      <a className={rootClassName} aria-label={product.name}>
        {variant === 'simple' && (
          <div className={simpleClassName}>
            <div className={s.imageContainer} data-scroll>
              {product?.images && (
                <Image
                  alt={product.name || 'Product Image'}
                  className="a-img"
                  src={product.images[0]?.url || placeholderImg}
                  width={400}
                  height={600}
                  quality={100}
                  layout="responsive"
                  {...imgProps}
                />
              )}
            </div>

            {!noNameTag && (
              <div className={s.productBottom}>
                {product.availableForSale === false ? (
                  <div className={s.available}>sold out</div>
                ) : (
                  <div className={s.productInfo}>
                    <div className={s.price}>{product.name}</div>
                    <div className={s.price}>{`${price}`}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {variant === 'default' && (
          <>
            <div className={s.imageContainer}>
              {product?.images && (
                <div>
                  <Image
                    alt={product.name || 'Product Image'}
                    className={s.productImage}
                    src={product.images[0]?.url || placeholderImg}
                    width={450}
                    height={600}
                    quality="100"
                    layout="responsive"
                    {...imgProps}
                  />
                </div>
              )}
              {!noNameTag && (
                <div className={s.imageContainerBottom}>
                  <div className={s.name}>{product.name}</div>
                  <div className={s.price}>
                    <Link href="/search">
                      <a className="link link--metis">
                        Discover the collection
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </a>
    </Link>
  )
}

export default ProductCard
