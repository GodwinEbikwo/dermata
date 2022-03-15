import Div100vh from 'react-div-100vh'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import { m } from 'framer-motion'
import { revealIn } from '@config/transitions'

const Root = styled.div`
  position: relative;
`

const RootInner = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Left = styled.div`
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

const Right = styled.div`
  display: flex;
  width: 50vw;
  border-bottom: 1px solid var(--border-color);
  border-right: none;

  @media (max-width: 1023px) {
    justify-content: center;
    text-align: center;
    width: 100vw;
    /* height: 50vw; */

    /* border-top: 1px solid var(--border-color); */
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

interface Props {
  variant?: 'default' | 'two'
}

export const Final = ({ variant = 'default' }: Props) => {
  return (
    <Root>
      {variant === 'default' && (
        <Div100vh className="flex flex-wrap">
          <Left>
            <div className="imgContainer" data-scroll>
              <Image
                priority={true}
                alt="shoe"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1647279662/nikeshoes_vreeig.webp"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="a-img"
              />
            </div>
          </Left>

          <Right>
            <div className="rightInner">
              <div className="relative overflow-hidden">
                <m.div variants={revealIn}>
                  <span className="a">New arrivals</span>
                </m.div>
              </div>

              <div className="relative overflow-hidden">
                <m.div variants={revealIn}>
                  <h2 className="b">For Feets</h2>
                </m.div>
              </div>

              <div className="relative overflow-hidden text-uppercase">
                <m.div variants={revealIn}>
                  <Link href="/">
                    <a className="link link--metis a">shop now</a>
                  </Link>
                </m.div>
              </div>
            </div>
          </Right>
        </Div100vh>
      )}

      {variant === 'two' && (
        <Div100vh className="flex flex-wrap hide-for-mobile">
          <Right>
            <div className="rightInner">
              <div className="relative overflow-hidden">
                <m.div variants={revealIn}>
                  <span className="a">Accesories</span>
                </m.div>
              </div>

              <h2 className="b">For Groceries</h2>
              <div className="text-uppercase">
                <Link href="/">
                  <a className="link link--metis a">shop now</a>
                </Link>
              </div>
            </div>
          </Right>

          <Left className="has-border-left ">
            <div className="imgContainer" data-scroll>
              <Image
                priority={true}
                alt="shoe"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1647365809/forma_bag1_atbfgx.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="a-img"
              />
            </div>
          </Left>
        </Div100vh>
      )}
    </Root>
  )
}
