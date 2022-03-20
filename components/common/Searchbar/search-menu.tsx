import cn from 'classnames'
import { m } from 'framer-motion'
import { variantsAni } from '@config/transitions'
import { Searchbar } from '..'
import { useMenu } from '@context/search-context'
import styled from 'styled-components'

const CloseBtn = styled.button`
  width: 50px;
  height: 49px;
  border-radius: 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--text-color);
  color: white;
`

export default function SearchMenu() {
  const { menuOpen, closeSearchMenu } = useMenu()
  return (
    <>
      <div className={cn('menu', { open: menuOpen })}>
        <m.div
          initial={false}
          animate={menuOpen ? 'enter' : 'exit'}
          exit="exit"
          variants={variantsAni}
        >
          <div className="flex">
            <Searchbar />
            <CloseBtn
              arial-label="close search bar"
              onClick={closeSearchMenu}
              style={{ color: 'var(--bg)' }}
            >
              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </CloseBtn>
          </div>
        </m.div>
      </div>
      <div className={cn('search-overlay', { open: menuOpen })} />
    </>
  )
}
