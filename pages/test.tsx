/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import { Layout } from '@components/common'
import styled from 'styled-components'
import { fade, variantsAni } from '@config/transitions'
import { m } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@components/ui'

export const fakeData = [
  {
    id: 1,
    name: 'Palov',
  },
  {
    id: 2,
    name: 'Beshbarmok',
  },
  {
    id: 4,
    name: 'Qozon kabob',
  },
  {
    id: 5,
    name: 'Koʻza shoʻrva',
  },
  {
    id: 6,
    name: 'Lagʻmon',
    img: 'https://res.cloudinary.com/godwinebikwo/image/upload/c_scale,w_515/v1621008026/tom-crew-XtyxEBiA8D8-unsplash_mjpah4.jpg',
  },
]

export const revealInOut = {
  initial: {
    y: '110%',
    opacity: 0,
    rotateX: '-80deg',
    transformPerspective: '600px',
  },
  enter: {
    y: '0%',
    opacity: 1,
    rotateX: '0deg',
    transition: {
      duration: 1.2,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
  exit: {
    y: '110%',
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
}

const Onesecond = {
  initial: {
    opacity: 0,
    rotate: '-45deg',
    // transformPerspective: '600px',
  },
  active: {
    opacity: 1,
    rotate: '0deg',
    transition: {
      duration: 2,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
}

const Twosecond = {
  initial: {
    opacity: 0,
    rotate: '-45deg',
    // transformPerspective: '600px',
  },
  active: {
    opacity: 1,
    rotate: '0deg',
    transition: {
      duration: 2,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
}

export const newvariantsAni = {
  initial: { opacity: 0 },
  active: {
    opacity: 1,
    // transition: { staggerChildren: 0.5, delayChildren: 0.05 },
  },
}

const newvariantsListAni = {
  initial: { opacity: 0 },
  active: {
    opacity: 1,
    transition: { staggerChildren: 0.85, delayChildren: 0.05 },
  },
}

const slideup = {
  initial: { y: '50%', opacity: 0 },
  active: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const menuInOut = {
  initial: { y: '110%' },
  active: {
    y: '0%',
    transition: {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    y: '110%',
    opacity: 0,
    transition: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
  },
}

const transition = [0.165, 0.84, 0.44, 1]

const firstExampleVariant = {
  animate: (i: number) => ({
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.1,
      staggerDirection: i, //we can replace it with custom number so that custom props doesn't need to declared!
    },
  }),
}

const firstExampleLetterVariant = {
  initial: { opacity: 0, y: '120%' },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ...transition,
    },
  },
}

const name = 'The process '
const nameArr = name.split('')

export default function Test() {
  const scrollRef = useRef(null)
  return (
    <m.div initial="initial" animate="enter" exit="exit" data-scroll-section>
      <m.div variants={fade}>
        <Container>
          <Title>National dishes of Uzbekistan</Title>
          {/* <Ul>
            {fakeData.map((elem, i) => (
              <li key={i}>
                <a className="anchor link link--metis">{elem.name}</a>
                <div className="img-cont">
                  <span className="img-cont_inner">
                    <Image
                      priority={true}
                      src={elem.img}
                      alt={elem.name}
                      layout="fill"
                      objectFit="contain"
                      className="img"
                    />
                  </span>
                </div>
              </li>
            ))}
          </Ul> */}

          <div className="relative">
            <div className="box_root">
              <div className="box one">Hello</div>
              <div className="box two">Holla</div>
              <div className="box three">Hombre</div>
            </div>
          </div>

          <div ref={scrollRef} className="relative">
            <m.div
              className="box_root"
              initial="initial"
              whileInView="active"
              variants={newvariantsAni}
              viewport={{ margin: '8px' }}
            >
              <m.div variants={Onesecond} className="box one">
                Hello
              </m.div>
              <m.div className="box two">Holla</m.div>
              <m.div variants={Twosecond} className="box three">
                Hombre
              </m.div>
            </m.div>
          </div>

          <div ref={scrollRef} className="relative">
            <Ul>
              {fakeData.map((elem, i) => (
                <m.h1
                  key={i}
                  initial="initial"
                  whileInView="active"
                  variants={newvariantsListAni}
                  viewport={{ margin: '15px' }}
                  style={{ lineHeight: '1.3' }}
                >
                  <span className="relative overflow-hidden block">
                    <m.div
                      style={{ display: 'inline-flex' }}
                      className="align-center space-between"
                      variants={menuInOut}
                    >
                      {elem.id} {elem.name}
                    </m.div>
                  </span>
                </m.h1>
              ))}
            </Ul>
          </div>

          <StyledSection
            initial="initial"
            whileInView="active"
            variants={slideup}
            viewport={{ margin: '12px' }}
          >
            <div className="article">
              <h1>We design responsibily</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos
                est mollitia nesciunt consectetur maxime
              </p>

              <Button>about us</Button>
            </div>
            <div className="img">
              <Image
                priority={true}
                // src="https://res.cloudinary.com/godwinebikwo/image/upload/c_fit,w_501/v1640016466/Cantarutti-Yumi-Armchair-2.07.0_kinu7l.jpg"
                src="/1.jpg"
                alt="img-name"
                layout="fill"
                objectFit="cover"
                className="img"
                quality="100"
              />
            </div>
          </StyledSection>
        </Container>
      </m.div>
    </m.div>
  )
}

Test.Layout = Layout

const StyledSection = styled(m.section)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5rem;

  button {
    width: 30% !important;
  }

  .article {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-grow: 1;
    flex-shrink: 0;
    background: var(--text-color);
    z-index: 0;
    color: white;
    padding: 5rem 3rem;

    p {
      max-width: 50ch;
      font-size: var(--size-400);
    }

    & > * + * {
      padding: 1rem 0;
    }
  }

  .img {
    width: 50%;
    position: relative;
    width: 900;
    height: 1200;
    flex-grow: 1;
    flex-shrink: 0;
    background: tan;
    min-height: 25rem;
  }
`

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: 5rem var(--spacer-lg);
  padding: var(--px-2);
  border: 1px solid red;
  max-width: 80rem;

  .box_root {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    flex: 1 1 15ch;
    padding: 150px 0;
  }

  .box {
    display: block;
    width: 30.33333%;
    height: 14rem;
    background: purple;
  }

  .one {
    transform: rotate(-45deg);
    background: orangered;
    transform: translate3d(-34px, 0px, 0px) rotate3d(-45deg, 0deg, 0deg);
  }

  .two {
    background: blue;
  }

  .three {
    transform: rotate(45deg);
    background: black;
  }
`

export const Title = styled.h1`
  font-size: 45px;
  letter-spacing: 4px;
  text-align: center;
  color: rgb(234, 131, 34);
`

export const Ul = styled(m.ul)`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: auto;
  position: relative;
  top: 10px;

  li {
    margin-bottom: 15px;
    padding: 3px;
    font-size: 30px;
    font-family: var(--font-2);
    text-transform: capitalize;
    cursor: pointer;
    line-height: 1;

    .anchor {
      z-index: 0;
      &:hover {
        & ~ div {
          transform: translate3d(0, -15%, 0) rotate(0deg) scale3d(0.6, 0.6, 0.6);
          opacity: 1;
          z-index: 1;
        }
      }
    }

    .img-cont {
      display: block;
      position: absolute;
      width: 300px;
      opacity: 0;
      overflow: hidden;
      will-change: transform, opacity;
      transition: transform 0.65s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.65s;
      transform: translate3d(0, 5%, 0) scale3d(0.5, 0.5, 0.5) rotate(-8deg);
      transform-origin: 50% 0%;

      .img-cont_inner {
        position: relative;
        display: block;
        overflow: hidden;
        width: 100%;
        height: 400px;

        .img {
          width: 100%;
          border-radius: 8px;
        }
      }
    }
  }
`
