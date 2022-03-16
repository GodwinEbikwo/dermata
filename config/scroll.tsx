interface ScrollProps {
  smooth: boolean
  class: string
  lerp: number
  getDirection: boolean
}

export const options: ScrollProps = {
  smooth: true,
  class: 'is-inview',
  lerp: 0.09,
  getDirection: true,
}
