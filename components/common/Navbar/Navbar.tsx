import { FC } from 'react'
import Link from 'next/link'
import { UserNav } from '@components/common'
import { NavHeader, NavHeaderInner } from './Navbar.styles'
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

const Navbar: FC<NavbarProps> = ({ links, pages }) => {
  const { openSearchMenu } = useMenu()
  const { sitePages } = usePages(pages)

  return (
    <NavHeader data-scroll>
      <NavHeaderInner>
        <div className="logo_container">
          <h4 className="text-uppercase" style={{ fontWeight: 600 }}>
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
            {sitePages.slice(0, 4).map((page) => (
              <Link href={page.url!} key={page.url}>
                <a aria-label={page.name} className="nav_link link link--metis">
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
    </NavHeader>
  )
}

export default Navbar
