import Div100vh from 'react-div-100vh'
import s from './h2.module.css'
import Image from 'next/image'
import { ProductCard } from '@components/product'

export const One = ({ product }: any) => {
  return (
    <Div100vh className={s.hgrid}>
      <aside className={s.hleft}>
        <div data-scroll className="">
          <div className={s.cnt} data-scroll>
            {product.slice(15, 16).map((product: any, i: number) => (
              <ProductCard
                key={product.id}
                variant="default"
                product={product}
                imgProps={{
                  priority: i === 0,
                  width: 540,
                  height: 810,
                }}
              />
            ))}
          </div>
        </div>
      </aside>

      <aside className={s.hright}>
        <div className={s.bgCover} data-scroll>
          <Image
            priority={true}
            alt="Mountains"
            src="https://res.cloudinary.com/godwinebikwo/image/upload/v1646680459/buffalo-5-1024x_ua0owq.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="a-img"
          />
        </div>
      </aside>
    </Div100vh>
  )
}
