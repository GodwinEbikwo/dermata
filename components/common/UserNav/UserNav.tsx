import { FC } from 'react'
import cn from 'classnames'
import { LineItem } from '@commerce/types/cart'
import useCart from '@framework/cart/use-cart'
import useCustomer from '@framework/customer/use-customer'
import { Avatar } from '@components/common'
import { useUI } from '@components/ui/context'
import Button from '@components/ui/Button'
import DropdownMenu from './DropdownMenu'
import s from './UserNav.module.css'
import Menu from '@components/icons/Menu'

interface Props {
  className?: string
}

const countItem = (count: number, item: LineItem) => count + item.quantity

const UserNav: FC<Props> = ({ className }) => {
  const { data } = useCart()
  const { data: customer } = useCustomer()
  const { toggleSidebar, setSidebarView, openModal } = useUI()
  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        {process.env.COMMERCE_CART_ENABLED && (
          <li className={s.item}>
            <Button
              className={s.item}
              variant="naked"
              onClick={() => {
                setSidebarView('CART_VIEW')
                toggleSidebar()
              }}
              aria-label={`Cart items: ${itemsCount}`}
            >
              <span className={s.itemName}>cart</span>
              {itemsCount > 0 ? (
                <span className={s.bagCount}>{itemsCount}</span>
              ) : (
                <span className={s.bagCount}>0</span>
              )}
            </Button>
          </li>
        )}

        {/* {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
          <li className={s.item}>
            {customer ? (
              <DropdownMenu />
            ) : (
              <button
                className={s.avatarButton}
                aria-label="Menu"
                onClick={() => openModal()}
              >
                <Avatar />
              </button>
            )}
          </li>
        )} */}

        {/* <li className={s.mobileMenu}>
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
        </li> */}
      </ul>
    </nav>
  )
}

export default UserNav
