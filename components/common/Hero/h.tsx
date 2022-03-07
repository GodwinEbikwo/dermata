import { m } from 'framer-motion'
import { use100vh } from 'react-div-100vh'
import s from './h.module.css'
import { Button } from '@components/ui'
import Link from 'next/link'

export const First = () => {
  const height = use100vh()
  const halfHeight = height ? height : '50vh'
  return (
    <div style={{ height: halfHeight }} className={s.hgrid}>
      <m.aside className={s.hleft}>
        <div className="center-absolute">
          <h1 className={s.BannerTitle}>
            <Link href="/search">
              <a>Jewelry</a>
            </Link>
          </h1>
        </div>
      </m.aside>

      <m.aside className={s.hright}>
        <div className="center-absolute">
          <h1 className={s.BannerTitle}>
            <Link href="/search">
              <a>ACCESSORIES</a>
            </Link>
          </h1>
        </div>
      </m.aside>
    </div>
  )
}
