import Image from 'next/image'

interface SliderThumbProps {
  onClick(): any
  selected: boolean
  imgSrc: string
  alt: string
}

export const Thumb = ({ selected, onClick, imgSrc, alt }: SliderThumbProps) => (
  <div
    className={`betterlate__slide betterlate__slide--thumb ${
      selected ? 'is-selected' : ''
    }`}
  >
    <button
      onClick={onClick}
      className="betterlate__slide__inner betterlate__slide__inner--thumb"
      type="button"
    >
      <Image
        layout="fill"
        objectFit="contain"
        className="betterlate__slide__thumbnail"
        src={imgSrc}
        alt={alt}
      />
    </button>
  </div>
)
