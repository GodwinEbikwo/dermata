import { FC, useRef, useEffect, useCallback } from 'react'
import FocusTrap from '@lib/focus-trap'
import { Cross } from '@components/icons'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import styled from 'styled-components'

const ModalRoot = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--sage1);
  backdrop-filter: blur(30px);
  transition: all 300ms;
`

const ModalBox = styled.div`
  position: relative;
  background-color: var(--button-bg);
  padding: var(--spacer-half);

  .close_btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.5rem;
    color: var(--button-text);
  }

  .close_btn-icon {
    height: 1.5rem;
    width: 1.5rem;
    color: var(--button-text);
    cursor: pointer;
  }
`

interface ModalProps {
  className?: string
  children?: any
  onClose: () => void
  onEnter?: () => void | null
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    const modal = ref.current

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true })
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      clearAllBodyScrollLocks()
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  return (
    <ModalRoot>
      <ModalBox role="dialog" ref={ref}>
        <button
          onClick={() => onClose()}
          aria-label="Close modal"
          className="close_btn"
        >
          <Cross className="close_btn-icon" />
        </button>
        <FocusTrap focusFirst>{children}</FocusTrap>
      </ModalBox>
    </ModalRoot>
  )
}

export default Modal
