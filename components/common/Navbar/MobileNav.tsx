import { FC, useEffect } from 'react'
import Link from 'next/link'
import { UserNav } from '@components/common'
import { NavHeader, NavHeaderInner } from './Navbar.styles'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { m } from 'framer-motion'
import SearchToogle from '@components/common/Searchbar/search-toggle'
import SearchMenu from '@components/common/Searchbar/search-menu'
import { variantsAni } from '@config/transitions'
import { useMenu } from '@context/search-context'
import { NavDropDown } from './Navdropdown'
import { Page } from '@commerce/types/page'
import { usePages } from '../Footer/Footer'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
  pages?: Page[]
}

const MobileNavbar: FC<NavbarProps> = ({ links, pages }) => {
  const { openSearchMenu } = useMenu()
  const { sitePages } = usePages(pages)
  const { scroll } = useLocomotiveScroll()
  useEffect(() => {
    scroll &&
      scroll.on('scroll', (func: any) => {
        document.documentElement.setAttribute('data-direction', func.direction)
      })
  })

  return (
    <NavHeader
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <div
        className="header-box_animation"
        style={{ transition: 'all 0.25s linear' }}
      >
        <NavHeaderInner>
          <div className="logo_container">
            <h4 className="text-uppercase" style={{ fontWeight: 700 }}>
              <Link href="/">
                <a className="logo" aria-label="Logo">
                  Dermata
                </a>
              </Link>
            </h4>
          </div>

          <div className="nav_left hide-for-mobile">
            <nav className="navMenu">
              <NavDropDown links={links} />
              {sitePages.slice(4, 5).map((page) => (
                <Link href={page.url!} key={page.url}>
                  <a
                    aria-label={page.name}
                    className="nav_link link link--metis"
                  >
                    {page.name}
                  </a>
                </Link>
              ))}
              {sitePages.slice(0, 3).map((page) => (
                <Link href={page.url!} key={page.url}>
                  <a
                    aria-label={page.name}
                    className="nav_link link link--metis"
                  >
                    {page.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          <m.div
            className="userNav_Box"
            initial={false}
            animate={openSearchMenu ? 'enter' : 'exit'}
            exit="exit"
            variants={variantsAni}
          >
            <nav className="userNav_Box_Inner">
              <SearchToogle toggle={openSearchMenu} />
              <UserNav />
            </nav>
          </m.div>
        </NavHeaderInner>
        <SearchMenu links={links} />
      </div>
    </NavHeader>
  )
}

export default MobileNavbar
