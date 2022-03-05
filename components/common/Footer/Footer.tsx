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

interface CollectionProps {
  label: string
  href: string
}

interface Props {
  className?: string
  children?: any
  pages?: Page[]
  clinks?: CollectionProps[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages, clinks }) => {
  const { sitePages } = usePages(pages)

  return (
    <FooterStyles>
      <FooterInner>
        <FooterGrid>
          <FooterBlock>
            <MenuFooter>
              <li>
                <Link href="/">
                  <a className="sitetitle">Mason Concepts</a>
                </Link>
              </li>
            </MenuFooter>
          </FooterBlock>

          <FooterBlock>
            <MenuFooter>
              <li>
                <Link href="/about">
                  <a aria-label="go to faq page" className="link link--metis">
                    FAQ
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/policy">
                  <a
                    aria-label="go to policy page"
                    className="link link--metis"
                  >
                    Privacy Policy
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/care">
                  <a
                    aria-label="go to custome care page"
                    className="link link--metis"
                  >
                    Customer Care
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/refunds">
                  <a
                    aria-label="go to shipping and return page"
                    className="link link--metis"
                  >
                    Shipping & Returns
                  </a>
                </Link>
              </li>
            </MenuFooter>
          </FooterBlock>

          <FooterBlock>
            <div className="end">
              <MenuFooter>
                <li>
                  <Link href="/">
                    <a className="link link--metis">Site by Godwin</a>
                  </Link>
                </li>
              </MenuFooter>
            </div>
          </FooterBlock>
        </FooterGrid>
      </FooterInner>
    </FooterStyles>
  )
}

function usePages(pages?: Page[]) {
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
