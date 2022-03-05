import { FC, useRef } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'
import styled from 'styled-components'

const AvatarBox = styled.div`
  margin-top: -0.1em;
`

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({}) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  let { userAvatar } = useUserAvatar()

  return (
    <AvatarBox ref={ref}>
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </AvatarBox>
  )
}

export default Avatar
