import Link from 'next/link'
import s from './n.module.css'
import { useMenu } from '@context/search-context'
import DropdownMenuDemo from '@components/ui/DropDown'
import { Sun } from '@components/icons'
import { useTheme } from 'next-themes'
import { I18nWidget, Searchbar } from '..'
import { useUI } from '@components/ui/context'
import Button from '@components/ui/Button'
import useCart from '@framework/cart/use-cart'
import useCustomer from '@framework/customer/use-customer'
import { Avatar } from '@components/common'
import { LineItem } from '@commerce/types/cart'
import UserNav from '../UserNav'
import Menu from '@components/icons/Menu'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

function Form() {
  return (
    <form className="h-full">
      <input
        id="search__input"
        className={s.search__input}
        type="text"
        name="q"
        placeholder="Search…"
        autoComplete="off"
      />
    </form>
  )
}

const countItem = (count: number, item: LineItem) => count + item.quantity

function Header({ links }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const { data } = useCart()
  const { data: customer } = useCustomer()
  const { toggleSidebar, setSidebarView, openModal } = useUI()
  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0

  return (
    <header className={s.root}>
      <div className={s.header}>
        <Link href="/">
          <a className={s.headerlogo}>Dermata</a>
        </Link>

        <div className={s.header_main_top}>
          <div className={s.header_search}>
            <Searchbar id="mobile-search" />
          </div>

          <div className={s.header_controls}>
            <div className={s.header_switcher_box}>
              <button
                onClick={() => {
                  theme === 'dark' ? setTheme('light') : setTheme('dark')
                }}
              >
                <Sun />
              </button>
            </div>

            <div className={s.header_switcher_box}>
              <I18nWidget />
            </div>

            {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
              <div className={s.header_account_link}>
                {customer ? (
                  <DropdownMenuDemo />
                ) : (
                  <button
                    className={s.avatarButton}
                    aria-label="avatar"
                    onClick={() => openModal()}
                  >
                    <Avatar />
                  </button>
                )}
              </div>
            )}

            <div className={s.header_account_link}>
              <Button
                className={s.item}
                variant="naked"
                onClick={() => {
                  setSidebarView('CART_VIEW')
                  toggleSidebar()
                }}
                aria-label={`Cart items: ${itemsCount}`}
              >
                <span className={s.bagCountTitle}>cart</span>
                {itemsCount > 0 ? (
                  <span className={s.bagCount}>{itemsCount}</span>
                ) : (
                  <span className={s.bagCount}>0</span>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className={s.header_main_bottom}>
          <nav className={`${s.header_nav} ${s.primary}`}>
            <ul className="flex">
              <li className={s.header_nav_item}>
                <Link href="/search">
                  <a>Shop All</a>
                </Link>
              </li>

              {links?.map((l) => (
                <li className={s.header_nav_item} key={l.href}>
                  <Link href={l.href}>
                    <a aria-label={`navigate to the ${l.label} page`}>
                      {l.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={`${s.header_nav} ${s.secondary}`}>
            <ul className="flex">
              <li className={s.header_nav_item}>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
              <li className={s.header_nav_item}>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
              <li className={s.header_nav_item}>
                <Link href="/">
                  <a>Faq</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={s.mobileNav}>
        <div className={s.mobileNavInner}>
          <Button
            aria-label="toggle"
            className={s.item}
            variant="naked"
            onClick={() => {
              setSidebarView('MOBILEMENU_VIEW')
              toggleSidebar()
            }}
          >
            <Menu />
          </Button>

          <Link href="/">
            <a className={s.mobileNavLogo}>Dermata</a>
          </Link>

          <div className={s.userNavBoxInner}>
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
