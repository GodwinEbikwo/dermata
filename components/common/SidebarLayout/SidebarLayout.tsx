import React, { FC } from 'react'
import { Cross, ChevronLeft } from '@components/icons'
import { UserNav } from '@components/common'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

type ComponentProps = { className?: string } & (
  | { handleClose: () => any; handleBack?: never }
  | { handleBack: () => any; handleClose?: never }
)

const SidebarLayout: FC<ComponentProps> = ({
  children,
  className,
  handleClose,
  handleBack,
}) => {
  return (
    <Root>
      <RootHeader>
        {handleClose && (
          <button
            className="button_actions"
            onClick={handleClose}
            aria-label="Close"
          >
            <Cross />
          </button>
        )}
        {handleBack && (
          <button
            className="button_actions"
            onClick={handleBack}
            aria-label="Go back"
          >
            <ChevronLeft />
            <span className="back">Back</span>
          </button>
        )}

        <UserNav />
      </RootHeader>
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

const RootHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: -1;
  min-height: 46px;

  .back {
    margin-left: 0.5rem;
    font-size: var(--size-300);
  }

  .button_actions {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    cursor: pointer;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

const Container = styled(Div100vh)`
  position: relative;
  display: flex;
  flex-direction: column;
`
