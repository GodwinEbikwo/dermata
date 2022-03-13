import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import {
  FooterStyles,
  FooterInner,
  FooterGrid,
  FooterBlock,
  MenuFooter,
} from './Footer.styles'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ pages }) => {
  const { sitePages } = usePages(pages)
  return (
    <FooterStyles>
      <FooterInner>
        <FooterGrid>
          <FooterBlock>
            <MenuFooter>
              <li>
                <Link href="/">
                  <a className="sitetitle">Subscribe</a>
                </Link>
              </li>
            </MenuFooter>

            <form className="flex">
              <label htmlFor="search__input" className="hidden">
                S
              </label>
              <input
                id="search__input"
                className="search__input"
                type="text"
                name="q"
                placeholder="EMAIL ADDRESS"
                autoComplete="off"
              />
              <button className="search_btn">
                <span>Join</span>
              </button>
            </form>
          </FooterBlock>

          <FooterBlock>
            <MenuFooter>
              {[...links, ...sitePages].map((page) => (
                <li key={page.url}>
                  <Link href={page.url!}>
                    <a aria-label={page.name} className="link link--metis">
                      {page.name}
                    </a>
                  </Link>
                </li>
              ))}
            </MenuFooter>
          </FooterBlock>

          <FooterBlock>
            <MenuFooter>
              <li>
                <Link href="/">
                  <a className="link link--metis">INSTAGRAM</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">FACEBOOK</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">YOUTUBE</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">TIKTOK</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">SNAPChat</a>
                </Link>
              </li>
            </MenuFooter>
          </FooterBlock>

          <FooterBlock>
            <MenuFooter>
              <li>
                <Link href="/">
                  <a className="link link--metis">DERMATA</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">23 charing cross</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">SE24 LONDON</a>
                </Link>
              </li>

              <li style={{ marginTop: '2em' }}>
                <Link href="/">
                  <a className="link link--metis">CREATED BY GODWIN</a>
                </Link>
              </li>
            </MenuFooter>
          </FooterBlock>
        </FooterGrid>
      </FooterInner>
    </FooterStyles>
  )
}

export function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
