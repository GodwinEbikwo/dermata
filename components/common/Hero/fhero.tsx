//@ts ignore
import Div100vh from 'react-div-100vh'
import Link from 'next/link'
import { m } from 'framer-motion'
import { revealIn, wrapperVariants } from '@config/transitions'
import Image from 'next/image'
import s from './f.module.css'

const v = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.35, delayChildren: 0.035 },
  },
}

interface StaticImageData {
  src: string
}

interface StaticRequire {
  default: StaticImageData
}

declare type StaticImport = StaticRequire | StaticImageData

interface Props {
  variant?: 'default' | 'two'
  string?: string
  caption?: string
  title?: string
  location?: string
}

function Wrapper({ children }: any) {
  return (
    <div className="relative overflow-hidden text-uppercase">{children}</div>
  )
}

export const Final = ({
  variant = 'default',
  string,
  caption,
  title,
  location,
}: Props) => {
  return (
    <div className={s.root}>
      {variant === 'default' && (
        <Div100vh className="flex flex-wrap">
          <m.div
            initial="initial"
            whileInView="enter"
            variants={v}
            className={s.left}
            viewport={{ once: true }}
          >
            <m.div
              className={s.imgContainer}
              data-scroll
              variants={wrapperVariants}
            >
              <Image
                priority={true}
                alt="shoe"
                src={`https://res.cloudinary.com/godwinebikwo/image/upload/${string}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="himg"
              />
            </m.div>
          </m.div>

          <m.div
            initial="initial"
            whileInView="enter"
            variants={v}
            className={s.right}
            viewport={{ once: true }}
          >
            <div className={s.rightInner}>
              <Wrapper>
                <m.div variants={revealIn}>
                  <span className={s.a}>{caption}</span>
                </m.div>
              </Wrapper>

              <Wrapper>
                <m.div variants={revealIn}>
                  <h2 className={s.b}>{title}</h2>
                </m.div>
              </Wrapper>

              <Wrapper>
                <m.div variants={revealIn}>
                  <Link href={`/${location}`}>
                    <a className="link link--metis a">shop now</a>
                  </Link>
                </m.div>
              </Wrapper>
            </div>
          </m.div>
        </Div100vh>
      )}

      {variant === 'two' && (
        <Div100vh className="flex flex-wrap hide-for-mobile">
          <m.div
            initial="initial"
            whileInView="enter"
            viewport={{ once: true }}
            variants={v}
            className={s.right}
          >
            <div className={s.rightInner}>
              <Wrapper>
                <m.div variants={revealIn}>
                  <span className={s.a}>Accesories</span>
                </m.div>
              </Wrapper>

              <Wrapper>
                <m.div variants={revealIn}>
                  <h2 className={s.b}>For Groceries</h2>
                </m.div>
              </Wrapper>

              <Wrapper>
                <m.div variants={revealIn}>
                  <Link href="/">
                    <a className="link link--metis a">shop now</a>
                  </Link>
                </m.div>
              </Wrapper>
            </div>
          </m.div>

          <m.div
            initial="initial"
            whileInView="enter"
            viewport={{ once: true }}
            variants={v}
            className={`${s.left} ${s.has_border_left}`}
          >
            <m.div
              data-scroll
              variants={wrapperVariants}
              className={s.imgContainer}
            >
              <Image
                priority={true}
                alt="bag"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1647365809/forma_bag1_atbfgx.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="himg"
              />
            </m.div>
          </m.div>
        </Div100vh>
      )}
    </div>
  )
}
