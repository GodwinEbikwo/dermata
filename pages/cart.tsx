import { GetStaticPropsContext } from 'next'
import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Button, Text, Container } from '@components/ui'
import {
  Bag,
  Cross,
  Check,
  MapPin,
  CreditCard,
  EmptyCart,
} from '@components/icons'
import { CartItem } from '@components/cart'
import { useUI } from '@components/ui/context'
import { Root } from './profile'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  return {
    props: { pages, categories },
  }
}

export default function Cart() {
  const error = null
  const success = null
  const { data, isLoading, isEmpty } = useCart()
  const { openSidebar, setSidebarView } = useUI()

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

  const goToCheckout = () => {
    openSidebar()
    setSidebarView('CHECKOUT_VIEW')
  }

  return (
    <Container>
      <Root>
        <div>
          {isLoading || isEmpty ? (
            <div className="">
              <div className="flex flex-column">
                <div className="flex align-center justify-center">
                  <EmptyCart />
                </div>
                <span className="text-center text-uppercase">
                  <div>Your cart is empty</div>
                </span>
              </div>
            </div>
          ) : error ? (
            <div className="flex flex-column justify-center align-center">
              <span className="flex items-center justify-center">
                <Cross width={24} height={24} />
              </span>
              <h2 className="text-center">
                We couldn’t process the purchase. Please check your card
                information and try again.
              </h2>
            </div>
          ) : success ? (
            <div className="flex flex-column justify-center items-center">
              <span className="flex align-center justify-center">
                <Check />
              </span>
              <h2 className="text-center">Thank you for your order.</h2>
            </div>
          ) : (
            <div>
              <h2>My Cart</h2>
              <div>Review your Order</div>
              <ul className="py">
                {data!.lineItems.map((item: any) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    currencyCode={data?.currency.code!}
                  />
                ))}
              </ul>

              <>
                <Text>
                  Before you leave, take a look at these items. We picked them
                  just for you
                </Text>
                <div className="flex">
                  {[1, 2, 3, 4].map((x) => (
                    <div
                      key={x}
                      style={{
                        width: '8rem',
                        height: '4rem',
                        backgroundColor: '#343434',
                        margin: '1em 0.25em',
                      }}
                    />
                  ))}
                </div>
              </>
            </div>
          )}
        </div>

        <div className="py">
          <ul>
            <li
              className="flex space-between"
              style={{ marginBottom: '0.5em' }}
            >
              <span>Subtotal</span>
              <span>{subTotal}</span>
            </li>
            <li
              className="flex space-between"
              style={{ marginBottom: '0.5em' }}
            >
              <span>Taxes</span>
              <span>Calculated at checkout</span>
            </li>
            <li
              className="flex space-between"
              style={{ marginBottom: '0.5em' }}
            >
              <span>Estimated Shipping</span>
              <span className="font-bold tracking-wide">FREE</span>
            </li>
          </ul>

          <div className="flex space-between">
            <span>Total</span>
            <span>{total}</span>
          </div>
        </div>
        <div>
          <div className="w-full lg:w-72">
            {isEmpty ? (
              <Button href="/" width="100%">
                Continue Shopping
              </Button>
            ) : (
              <>
                {process.env.COMMERCE_CUSTOMCHECKOUT_ENABLED ? (
                  <Button width="100%" onClick={goToCheckout}>
                    Proceed to Checkout ({total})
                  </Button>
                ) : (
                  <Button href="/checkout" width="100%">
                    Proceed to Checkout
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </Root>
    </Container>
  )
}

Cart.Layout = Layout
