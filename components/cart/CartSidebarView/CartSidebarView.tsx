import cn from 'classnames'
import { FC } from 'react'
import s from './CartSidebarView.module.css'
import CartItem from '../CartItem'
import { useUI } from '@components/ui/context'
import { Cross, Check, EmptyCart } from '@components/icons'
import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'
import SidebarLayout from '@components/common/SidebarLayout'
import Button from '@components/ui/Button'
import styled from 'styled-components'
import Link from 'next/link'

const CartSidebarView: FC = () => {
  const { closeSidebar, setSidebarView } = useUI()
  const { data, isLoading, isEmpty } = useCart()

  const { price: subTotal } = usePrice(
    data && {
      amount: Number(data.subtotalPrice),
      currencyCode: data.currency.code,
    }
  )
  const { price: total } = usePrice(
    data && {
      amount: Number(data.totalPrice),
      currencyCode: data.currency.code,
    }
  )
  const handleClose = () => closeSidebar()
  const goToCheckout = () => setSidebarView('CHECKOUT_VIEW')

  const error = null
  const success = null

  return (
    <SidebarLayout
      className={cn(
        [s.root],
        [s.cart],
        { close: closeSidebar },
        {
          [s.empty]: error || success || isLoading || isEmpty,
        }
      )}
      handleClose={handleClose}
    >
      {isLoading || isEmpty ? (
        <>
          <div className="center-absolute">
            <div className="flex flex-column">
              <div className="flex align-center justify-center">
                <EmptyCart />
              </div>
              <span className="text-center text-uppercase">
                <div className={s.states_title}>Your cart is empty</div>
                <div className={s.states_caption}>
                  <Link href="/search">
                    <a
                      className="link link--metis text-uppercase"
                      onClick={handleClose}
                    >
                      got to shop
                    </a>
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </>
      ) : error ? (
        <div className={s.states_styles}>
          <span className={s.states_message}>
            <Cross width={24} height={24} />
          </span>
          <h3 className={s.states_h3}>
            We couldn’t process the purchase. Please check your card information
            and try again.
          </h3>
        </div>
      ) : success ? (
        <div className={s.states_styles}>
          <span className={s.states_message}>
            <Check />
          </span>
          <h3 className={s.states_h3}>Thank you for your order.</h3>
        </div>
      ) : (
        <>
          <div className={s.cart_content}>
            <Div className="w-full info-container">
              <span className="info-container_inner">
                <span className="flex flex-wrap justify-center align-center">
                  <span className="block spc">
                    {data?.lineItems.length} Item
                    {data?.lineItems.length === 1 ? '' : 's'}
                  </span>
                  <span className="block spc">&bull;</span>
                  <span className="block">UK shipping Only</span>
                </span>
              </span>
            </Div>

            <ul className={s.lineItemsList}>
              {data!.lineItems.map((item: any) => (
                <CartItem
                  key={item.id}
                  item={item}
                  currencyCode={data!.currency.code}
                />
              ))}
            </ul>
          </div>

          <footer className={s.cart_footer}>
            <ul className={s.cart_footer_list}>
              <li className={s.cart_footer_list_item}>
                <span>Subtotal</span>
                <span>{subTotal}</span>
              </li>
              <li className={s.cart_footer_list_item}>
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </li>
              <li className={s.cart_footer_list_item}>
                <span>Shipping</span>
                <span>TBC</span>
              </li>
            </ul>

            <div className={s.cart_footer_total}>
              <span>Total</span>
              <span>{total}</span>
            </div>
            <div>
              {process.env.COMMERCE_CUSTOMCHECKOUT_ENABLED ? (
                <Button Component="a" width="100%" onClick={goToCheckout}>
                  Proceed to Checkout ({total})
                </Button>
              ) : (
                <Button href="/checkout" Component="a" width="100%">
                  Checkout - {total}
                </Button>
              )}
            </div>
          </footer>
        </>
      )}
    </SidebarLayout>
  )
}

export default CartSidebarView

const Div = styled.div`
  margin-bottom: var(--spacer);
  font-family: var(--font2);

  .spc {
    margin-right: 0.5em;
  }

  .info-container_inner {
    position: relative;
    overflow: hidden;
    display: block;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.75rem;
    padding: 0.5rem;
    background-color: var(--text-color);
    color: var(--bg);
    border-radius: 5px;
  }
`
