import React, { FC } from 'react'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

type ComponentProps = { className?: string } & (
  | { handleClose: () => any; handleBack?: never }
  | { handleBack: () => any; handleClose?: never }
)

const SidebarLayout: FC<ComponentProps> = ({ children, className }) => {
  return (
    <Root className={className ? className : ''}>
      <Container>{children}</Container>
    </Root>
  )
}

export default SidebarLayout

const Root = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
`

const Container = styled(Div100vh)`
  position: relative;
  display: flex;
  flex-direction: column;
  /* padding: var(--spacer) var(--spacer-half); */
`
