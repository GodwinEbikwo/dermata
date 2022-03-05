import { useEffect } from 'react'
import Link from 'next/link'
import { UserNav } from '@components/common'
import s from './n.module.css'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { m } from 'framer-motion'
import SearchMenu from '@components/common/Searchbar/search-menu'
import { variantsAni } from '@config/transitions'
import { useMenu } from '@context/search-context'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

export default function Header({ links }: NavbarProps) {
  const { openSearchMenu } = useMenu()
  return (
    <header className={s.headerContainer}>
      <div className={s.headerBoxAnimation}>
        <div className={s.headerInner}>
          <div className={s.logoContainer}>
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <h4 className={s.logoTitle}>Mason Concepts</h4>
              </a>
            </Link>
          </div>

          <m.div
            className={s.userNavBox}
            initial={false}
            animate={openSearchMenu ? 'enter' : 'exit'}
            exit="exit"
            variants={variantsAni}
          >
            <nav className={s.userNavBoxInner}>
              <UserNav />
            </nav>
          </m.div>
        </div>
        <SearchMenu links={links} />
      </div>
    </header>
  )
}
