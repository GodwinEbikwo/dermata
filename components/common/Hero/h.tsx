import { use100vh } from 'react-div-100vh'
import s from './h.module.css'
import Link from 'next/link'
import Image from 'next/image'

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
            src="https://res.cloudinary.com/godwinebikwo/image/upload/e_grayscale/v1646679540/joeyy-lee-s8SJ8pmxPDA-unsplash_dzfghb.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="a-img"
          />

          <div className="center-absolute">
            <h1 className={s.BannerTitle}>
              <Link href="/search">
                <a className="link link--metis">Jewelry</a>
              </Link>
            </h1>
          </div>
        </div>
      </aside>

      <aside className={s.hright}>
        <div className={s.bgCover} data-scroll>
          <Image
            priority={true}
            alt="Mountains"
            src="https://res.cloudinary.com/godwinebikwo/image/upload/e_grayscale/v1646680459/buffalo-5-1024x_ua0owq.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="a-img"
          />

          <div className="center-absolute">
            <h1 className={s.BannerTitle}>
              <Link href="/search">
                <a className="link link--metis">ACCESSORIES</a>
              </Link>
            </h1>
          </div>
        </div>
      </aside>
    </div>
  )
}
