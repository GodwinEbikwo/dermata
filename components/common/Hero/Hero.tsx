import s from './hero.module.css'
import Image from 'next/image'
import Div100vh from 'react-div-100vh'
import { m } from 'framer-motion'
import { ProductCard } from '@components/product'
import { variantsAni, revealIn } from '@config/transitions'
import useEmblaCarousel from 'embla-carousel-react'

function FancySpan({ children }: any) {
  return <span className="block relative overflow-hidden">{children}</span>
}

function NotCard({ label }: any) {
  return (
    <div className={s.card}>
      <div className={s.cardInner}>
        <div className={s.line} />
        <div className="center-absolute">
          <h4 className={s.cardInner_text}>{label}</h4>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ products }: any) {
  const [emblaRef] = useEmblaCarousel()
  return (
    <section className="relative">
      <Div100vh className={s.root}>
        <div className={s.content}>
          <aside className={s.one}>
            <div className={s.one_inner}>
              <span className={s.prefix}>—</span>
              <h1 className={s.one_title}>
                <FancySpan>
                  <m.span className="inline-flex">Dermata Spring</m.span>
                </FancySpan>
                <FancySpan>
                  <m.span className="inline-flex">Collection</m.span>
                </FancySpan>
              </h1>
            </div>
          </aside>

          <aside className={s.two}>
            <div className={s.two_inner} data-scroll>
              <Image
                src="https://res.cloudinary.com/godwinebikwo/image/upload/q_100/v1646219775/9_2400x2400_vfjaic.jpg"
                alt="alt season"
                layout="fill"
                objectFit="fill"
                quality={100}
                className="a-img"
              />
            </div>
          </aside>
        </div>
      </Div100vh>

      <m.ul
        key="grid"
        initial="initial"
        whileInView="enter"
        variants={variantsAni}
        className={s.grid}
      >
        <NotCard label="jewellry" />
        {products.slice(0, 3).map((product: any, i: number) => (
          <m.li className="relative" key={product.id}>
            <ProductCard
              variant="simple"
              product={product}
              imgProps={{
                priority: i === 0,
                width: 540,
                height: 810,
              }}
            />
          </m.li>
        ))}
      </m.ul>

      <m.ul
        key="grid"
        initial="initial"
        whileInView="enter"
        variants={variantsAni}
        className={s.grid}
      >
        {products.slice(4, 7).map((product: any, i: number) => (
          <m.li className="relative" key={product.id}>
            <ProductCard
              variant="simple"
              product={product}
              imgProps={{
                priority: i === 0,
                width: 540,
                height: 810,
              }}
            />
          </m.li>
        ))}

        <NotCard label="Accessories" />
      </m.ul>

      <m.ul
        key="grid"
        initial="initial"
        whileInView="enter"
        variants={variantsAni}
        className={s.grid}
      >
        <NotCard label="Suits" />

        {products.slice(12, 15).map((product: any, i: number) => (
          <m.li className="relative" key={product.id}>
            <ProductCard
              variant="simple"
              product={product}
              imgProps={{
                priority: i === 0,
                width: 540,
                height: 810,
              }}
            />
          </m.li>
        ))}
      </m.ul>
    </section>
  )
}
