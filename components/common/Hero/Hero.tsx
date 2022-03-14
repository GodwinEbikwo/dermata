import s from './hero.module.css'
import { m } from 'framer-motion'
import { ProductCard } from '@components/product'
import styled from 'styled-components'
import Link from 'next/link'
import { Final } from './fhero'

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

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 16vh var(--px-2);
  grid-column-gap: 1.953vw;
  grid-row-gap: 12.25vh;

  a:nth-child(5n + 3) {
    grid-column: 4 / 3;
  }

  a:nth-child(10n + 5) {
    grid-column: 3 / 1;
  }

  a:nth-child(10n + 6) {
    grid-column: 4 / -3;
  }

  a:nth-child(10n + 10) {
    grid-column: 1 / 2;
  }
`

export default function Hero({ products }: any) {
  return (
    <section className={s.root}>
      <Final variant="default" />

      <div className={s.gridHeader}>
        <div className="flex flex-row align-center space-between text-uppercase">
          <div>Shop Jewellery</div>
          <Link href="/">
            <a>shop now</a>
          </Link>
        </div>
      </div>

      <ul className={s.grid}>
        {products.slice(0, 4).map((product: any, i: number) => (
          <li className="relative" key={product.id}>
            <ProductCard
              variant="simple"
              product={product}
              imgProps={{
                priority: i === 0,
                width: 540,
                height: 810,
              }}
            />
          </li>
        ))}
      </ul>

      <div className={s.gridHeader}>
        <div className="flex flex-row align-center space-between text-uppercase">
          <div>Shop Accessories</div>
          <Link href="/">
            <a>shop now</a>
          </Link>
        </div>
      </div>

      <ul className={s.grid}>
        {products.slice(4, 8).map((product: any, i: number) => (
          <li className="relative" key={product.id}>
            <ProductCard
              variant="simple"
              product={product}
              imgProps={{
                priority: i === 0,
                width: 540,
                height: 810,
              }}
            />
          </li>
        ))}
      </ul>

      {/* <m.ul
        style={{ marginTop: 'var(--spacer-half' }}
        initial="initial"
        whileInView="enter"
        variants={variantsAni}
        className={s.grid}
      >
        {products.slice(4, 15).map((product: any, i: number) => (
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
      </m.ul> */}
    </section>
  )
}
