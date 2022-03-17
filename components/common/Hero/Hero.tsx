import s from './hero.module.css'
import { ProductCard } from '@components/product'
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

export default function Hero({ products }: any) {
  return (
    <section className={s.root}>
      <Final
        caption="new arrivals"
        title="for feet"
        variant="default"
        location="search"
        string="v1647279662/nikeshoes_vreeig.webp"
      />

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

      <Final variant="two" />

      <div className={s.gridHeader}>
        <div className="flex flex-row align-center space-between text-uppercase">
          <div>Shop Accessories</div>
          <Link href="/">
            <a>shop now</a>
          </Link>
        </div>
      </div>

      <ul className={s.grid}>
        {products.slice(8, 12).map((product: any, i: number) => (
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

      <Final
        location="search/suits"
        caption="explore"
        title="weddings"
        variant="default"
        string="v1646219775/9_2400x2400_vfjaic.jpg"
      />
    </section>
  )
}
