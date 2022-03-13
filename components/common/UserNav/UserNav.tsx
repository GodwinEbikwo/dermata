import { FC } from 'react'
import cn from 'classnames'
import { LineItem } from '@commerce/types/cart'
import useCart from '@framework/cart/use-cart'
import useCustomer from '@framework/customer/use-customer'
import { useUI } from '@components/ui/context'
import Button from '@components/ui/Button'
import s from './UserNav.module.css'
import DropdownMenuDemo from '@components/ui/DropDown'

interface Props {
  className?: string
}

const countItem = (count: number, item: LineItem) => count + item.quantity

const UserNav: FC<Props> = ({ className }) => {
  const { data } = useCart()
  const { data: customer } = useCustomer()
  const { toggleSidebar, openModal, setSidebarView } = useUI()
  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
          <li className={s.item}>
            {customer ? (
              <DropdownMenuDemo />
            ) : (
              <Button
                className={s.item}
                variant="naked"
                aria-label="Menu"
                onClick={() => openModal()}
              >
                <span className={s.itemName}>Login</span>
              </Button>
            )}
          </li>
        )}
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
      </ul>
    </nav>
  )
}

export default UserNav
