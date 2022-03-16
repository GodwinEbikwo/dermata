import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { shimmer, toBase64 } from '@config/img-helpers'
import styled from 'styled-components'

interface ImageProps {
  url: string
  alt: string
  height: number
  width: number
}
const SliderCarousel = ({ product }: any) => {
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  useEffect(() => {
    if (!embla) return
  }, [embla])

  return (
    <R className="betterlate">
      <div className="betterlate__viewport" ref={mainViewportRef}>
        <div className="betterlate__container">
          {product.map((image: ImageProps, i: any) => (
            <div className="betterlate__slide" key={i} data-scroll>
              <div className="betterlate__slide__inner" data-scroll>
                <Image
                  className="a-img"
                  priority={i === 0}
                  width={image.width / 2}
                  height={image.height / 2}
                  quality="100"
                  layout="intrinsic"
                  src={image.url}
                  alt={image.alt || 'betterlate product'}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(image.width / 2, image.height / 2)
                  )}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </R>
  )
}

export default SliderCarousel

const R = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`
