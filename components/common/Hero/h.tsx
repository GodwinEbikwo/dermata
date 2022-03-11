import { use100vh } from 'react-div-100vh'
import s from './h.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@components/ui'

export const First = () => {
  const height = use100vh()
  const halfHeight = height ? height : '50vh'
  return (
    <div style={{ height: halfHeight }} className={s.hgrid}>
      <aside className={s.hleft}>
        <div className={s.bgCover} data-scroll>
          <Image
            priority={true}
            alt="Mountains"
            src="https://res.cloudinary.com/godwinebikwo/image/upload/v1646680460/buffalo-2-1024x_tqllsc.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="a-img"
          />
        </div>
      </aside>

      <div className="center-absolute">
        <div className={s.BannerTitle}>
          <Link href="/search">
            <a className="link link--metis">SHop now</a>
          </Link>
        </div>
      </div>

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
    </div>
  )
}
