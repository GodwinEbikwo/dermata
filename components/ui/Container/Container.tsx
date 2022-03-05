import React, { FC } from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 2460px;
  padding: 0 var(--px-2);
`
interface ContainerProps {
  className?: string
  children?: any
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>
}

export default Container
