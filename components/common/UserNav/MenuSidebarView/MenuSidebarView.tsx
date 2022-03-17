import Link from 'next/link'
import { FC } from 'react'
import { useUI } from '@components/ui/context'
import SidebarLayout from '@components/common/SidebarLayout'
import { Link as LinkProps } from '.'
import s from './m.module.css'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { useCart } from '@framework/cart'
import useCustomer from '@framework/customer/use-customer'
import I18nWidget from '@components/common/I18nWidget/I18nWidget'
import { useTheme } from 'next-themes'
import { Sun } from '@components/icons'

interface MenuProps {
  links?: LinkProps[]
}

const MenuSidebarView: FC<MenuProps> = (props) => {
  const { theme, setTheme } = useTheme()
  const { data } = useCart()
  const { data: customer } = useCustomer()
  const { closeSidebar, openModal } = useUI()
  const handleClose = () => closeSidebar()

  return (
    <SidebarLayout handleClose={handleClose} className={s.root}>
      <nav className="relative">
        <ul style={{ marginTop: 'var(--spacer)' }}>
          <li className={s.list}>
            <Link href="/search">
              <a onClick={() => closeSidebar()}>
                <h4 className={s.label}>All</h4>
              </a>
            </Link>
          </li>

          {props.links?.map((l: any) => (
            <li key={l.href} className={s.list}>
              <Link href={l.href}>
                <a onClick={() => closeSidebar()}>
                  <h4 className={s.label}>{l.label}</h4>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <footer className={s.navBottom}>
          <div className={s.item}>
            <div className={s.userBox}>
              {customer ? (
                <DropdownMenu />
              ) : (
                <button
                  className={s.button}
                  aria-label="Menu"
                  onClick={() => openModal()}
                >
                  <span>Login / Register</span>
                </button>
              )}
            </div>

            <div className={s.switcher}>
              <button
                className={s.button}
                onClick={() => {
                  theme === 'dark' ? setTheme('light') : setTheme('dark')
                }}
              >
                <Sun />
              </button>
            </div>
          </div>
        </footer>
      </nav>
    </SidebarLayout>
  )
}

export default MenuSidebarView
