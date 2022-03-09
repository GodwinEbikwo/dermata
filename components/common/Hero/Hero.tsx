import s from './hero.module.css'
import { m } from 'framer-motion'
import { ProductCard } from '@components/product'
import { variantsAni } from '@config/transitions'
import { First } from './h'

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
  return (
    <section className={s.root}>
      <div className={s.root}>
        <First />
      </div>

      <m.ul
        style={{ marginTop: 'var(--spacer-lg' }}
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
