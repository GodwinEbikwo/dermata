import cn from 'classnames'
import { m } from 'framer-motion'
import { variantsAni } from '@config/transitions'
import { Searchbar } from '..'
import { useMenu } from '@context/search-context'
import styled from 'styled-components'
import Link from 'next/link'

const CloseBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 9999px;
  box-shadow: 0px 18px 28px 0 var(--accent-2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--text-color);
  color: white;
`

export default function SearchMenu({ links }: any) {
  const { menuOpen, closeSearchMenu } = useMenu()

  return (
    <>
      <div className={cn('menu', { open: menuOpen })}>
        <div className="center-absolute">
          <div className="flex align-center justify-center flex-column">
            <div
              style={{
                paddingBottom: 'var(--px-2)',
                justifyContent: 'flex-end',
              }}
              className="flex align-center justify-center"
            >
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

            <h1
              style={{
                paddingBottom: 'var(--spacer-half)',
              }}
            >
              Search for items
            </h1>

            <m.div
              initial={false}
              animate={menuOpen ? 'enter' : 'exit'}
              exit="exit"
              variants={variantsAni}
            >
              <Searchbar />

              <div
                className="flex flex-row flex-wrap align-center justify-center"
                style={{
                  paddingTop: 'var(--spacer-half)',
                }}
              >
                {links?.map((l: any) => (
                  <SearchLinks key={l.href}>
                    <Link href={l.href}>
                      <a
                        aria-label={`navigate to the ${l.label} page`}
                        onClick={closeSearchMenu}
                      >
                        {l.label}
                      </a>
                    </Link>
                  </SearchLinks>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </div>
      <div className={cn('search-overlay', { open: menuOpen })} />
    </>
  )
}

const SearchLinks = styled.span`
  display: inline-block;
  width: auto;
  height: fit-content;
  padding: 0.5em 3em;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  transition: all 300ms var(--easing);

  &:hover {
    background: var(--text-color);
    color: var(--bg);
  }
`
