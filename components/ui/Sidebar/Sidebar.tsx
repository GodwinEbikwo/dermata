import { FC, useEffect, useRef } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import styled from 'styled-components'

const Root = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  height: 100%;
`

const Inner = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
`

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(39, 39, 39, 0.8);
  transition: all 1s cubic-bezier(0.77, 0, 0.18, 1);
  backdrop-filter: blur(15px) saturate(180%);
`

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    padding-left: 3rem;
    width: 500px;
  }

  .inner {
    width: 100%;
    height: 100%;
    @media (min-width: 768px) {
      width: 100vw;
    }
  }

  .inner_sidebar {
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--bg);
    line-height: 1.5rem;
    -webkit-overflow-scrolling: touch !important;
  }
`

interface SidebarProps {
  children: any
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = ({ children, onClose }) => {
  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const onKeyDownSidebar = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.focus()
    }

    const contentElement = contentRef.current

    if (contentElement) {
      disableBodyScroll(contentElement, { reserveScrollBarGap: true })
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <Root ref={sidebarRef} onKeyDown={onKeyDownSidebar} tabIndex={1}>
      <Inner>
        <BackDrop onClick={onClose} />
        <Container>
          <div className="inner">
            <div className="inner_sidebar" ref={contentRef}>
              {children}
            </div>
          </div>
        </Container>
      </Inner>
    </Root>
  )
}

export default Sidebar
