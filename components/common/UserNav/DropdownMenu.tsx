import cn from 'classnames'
import Link from 'next/link'
import { FC, useRef, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import s from './DropdownMenu.module.css'
import { Avatar } from '@components/common'
import { useUI } from '@components/ui/context'
import ClickOutside from '@lib/click-outside'
import useLogout from '@framework/auth/use-logout'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { Button } from '@components/ui'

interface DropdownMenuProps {
  open?: boolean
}

const LINKS = [
  {
    name: 'My Orders',
    href: '/orders',
  },
  {
    name: 'My Profile',
    href: '/profile',
  },
  {
    name: 'My Cart',
    href: '/cart',
  },
]

const DropdownMenu: FC<DropdownMenuProps> = ({ open = false }) => {
  const logout = useLogout()
  const { pathname } = useRouter()
  const { theme, setTheme } = useTheme()
  const [display, setDisplay] = useState(false)
  const { closeSidebarIfPresent } = useUI()
  const ref = useRef() as React.MutableRefObject<HTMLUListElement>

  useEffect(() => {
    if (ref.current) {
      if (display) {
        disableBodyScroll(ref.current)
      } else {
        enableBodyScroll(ref.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [display])

  return (
    <ClickOutside active={display} onClick={() => setDisplay(false)}>
      <div>
        <button
          className={s.avatarButton}
          onClick={() => setDisplay(!display)}
          aria-label="Menu"
        >
          <Avatar />
        </button>

        <ul
          className={cn(s.dropdownMenu, { [s.showDisplay]: display })}
          ref={ref}
        >
          {LINKS.map(({ name, href }) => (
            <li key={href} className={s.actions}>
              <Link href={href}>
                <a
                  className={cn('link link--metis', {
                    [s.active]: pathname === href,
                  })}
                  onClick={() => {
                    setDisplay(false)
                    closeSidebarIfPresent()
                  }}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}

          <li className={s.actions}>
            <a className="link link--metis" onClick={() => logout()}>
              Logout
            </a>
          </li>

          <li className={s.actions}>
            <Button
              variant="slim"
              className={s.linkBtn}
              onClick={() => {
                theme === 'dark' ? setTheme('light') : setTheme('dark')
                setDisplay(false)
              }}
            >
              <span>{theme}</span>
            </Button>
          </li>
        </ul>
      </div>
    </ClickOutside>
  )
}

export default DropdownMenu
