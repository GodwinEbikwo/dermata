import { m } from 'framer-motion'
import { use100vh } from 'react-div-100vh'
import s from './h.module.css'
import { Button } from '@components/ui'

export const First = () => {
  const height = use100vh()
  const halfHeight = height ? height / 1.1125 : '50vh'
  return (
    <div style={{ height: halfHeight }} className={s.hgrid}>
      <m.aside className={s.hleft}>
        <div className="center-absolute">
          <h1 className={s.hleftTitle}>Dermata</h1>
        </div>

        <div className={`mobile-visible ${s.btnContainer}`}>
          <Button
            className={s.cta_btn}
            title="Book Now"
            aria-label="Book an appoinment now"
          >
            Explore the collection
          </Button>
        </div>
      </m.aside>

      <m.aside className={s.hright}>
        <div className={`desktop-visible ${s.btnContainer}`}>
          <Button className={s.cta_btn} aria-label="Book an appoinment now">
            Explore the collection
          </Button>
        </div>
      </m.aside>
    </div>
  )
}
