//@ts ignore
import Div100vh from 'react-div-100vh'
import styled from 'styled-components'
import Link from 'next/link'
import { m } from 'framer-motion'
import { revealIn, wrapperVariants } from '@config/transitions'
import Image, { ImageProps } from 'next/image'

const Root = styled.div`
  position: relative;
`

const Left = styled(m.div)`
  display: flex;
  width: 50vw;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);

  &.has-border-left {
    border-left: 1px solid var(--border-color);
  }

  .imgContainer {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f6f6f6;

    @media (max-width: 1023px) {
      height: 100%;
    }
  }

  @media (max-width: 1023px) {
    width: 100vw;
    height: 100vw;
    height: 108vw;
    border-bottom: none;
    border-right: none;
  }
`

const Right = styled(m.div)`
  display: flex;
  width: 50vw;
  border-bottom: 1px solid var(--border-color);
  border-right: none;

  @media (max-width: 1023px) {
    justify-content: center;
    text-align: center;
    width: 100vw;
    border-bottom: 1px solid var(--border-color);
    border-right: none;
  }

  .rightInner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px 15px 45px;

    @media (max-width: 1023px) {
      width: 100%;
      padding-bottom: var(--spacer);
      align-items: flex-start;
    }

    .a {
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 0.2em;
      font-family: var(--font2);
    }

    .b {
      margin-bottom: 0.2em;
      letter-spacing: var(--ls-md);
      text-transform: uppercase;
    }
  }
`

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
    <Root>
      {variant === 'default' && (
        <Div100vh className="flex flex-wrap">
          <Left initial="initial" whileInView="enter" variants={v}>
            <m.div
              className="imgContainer"
              data-scroll
              variants={wrapperVariants}
            >
              <Image
                priority={true}
                alt="shoe"
                src={string}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="a-img"
              />
            </m.div>
          </Left>

          <Right initial="initial" whileInView="enter" variants={v}>
            <div className="rightInner">
              <Wrapper>
                <m.div variants={revealIn}>
                  <span className="a">{caption}</span>
                </m.div>
              </Wrapper>

              <Wrapper>
                <m.div variants={revealIn}>
                  <h2 className="b">{title}</h2>
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
          </Right>
        </Div100vh>
      )}

      {variant === 'two' && (
        <Div100vh className="flex flex-wrap hide-for-mobile">
          <Right initial="initial" whileInView="enter" variants={v}>
            <div className="rightInner">
              <Wrapper>
                <m.div variants={revealIn}>
                  <span className="a">Accesories</span>
                </m.div>
              </Wrapper>

              <Wrapper>
                <m.div variants={revealIn}>
                  <h2 className="b">For Groceries</h2>
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
          </Right>

          <Left
            initial="initial"
            whileInView="enter"
            variants={v}
            className="has-border-left "
          >
            <m.div
              className="imgContainer"
              data-scroll
              variants={wrapperVariants}
            >
              <Image
                priority={true}
                alt="shoe"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1647365809/forma_bag1_atbfgx.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="a-img"
              />
            </m.div>
          </Left>
        </Div100vh>
      )}
    </Root>
  )
}
