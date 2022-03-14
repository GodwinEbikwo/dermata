import Div100vh from 'react-div-100vh'
import s from './h2.module.css'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

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

  .imgContainer {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media (max-width: 767px) {
      height: 100%;
    }
  }

  @media (max-width: 767px) {
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

  @media (max-width: 767px) {
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: 50vw;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-right: none;
  }

  .rightInner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px 15px 45px;

    @media (max-width: 767px) {
      width: 100%;
      padding-bottom: var(--spacer-half);
      align-items: flex-start;
    }
    .a {
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 0.2em;
    }

    .b {
      margin-bottom: 0.2em;
      letter-spacing: var(--ls-md);
      text-transform: uppercase;
    }
  }
`

export const Final = ({ product }: any) => {
  return (
    <Root>
      <RootInner className="flex flex-wrap hide-for-desktop">
        <Left>
          <div className="imgContainer" data-scroll>
            <Image
              priority={true}
              alt="Mountains"
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
            <span className="a">new arrivals</span>
            <h2 className="b">Shoe collection</h2>
            <div className="text-uppercase">
              <Link href="/">
                <a className="link link--metis a">shop now</a>
              </Link>
            </div>
          </div>
        </Right>
      </RootInner>

      <Div100vh className="flex flex-wrap hide-for-mobile">
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
            <span className="a">new arrivals</span>
            <h2 className="b">Shoe collection</h2>
            <div className="text-uppercase">
              <Link href="/">
                <a className="link link--metis a">shop now</a>
              </Link>
            </div>
          </div>
        </Right>
      </Div100vh>
    </Root>
  )
}
