import cn from 'classnames'
import React, { FC, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { CommerceProvider } from '@framework'
import { useUI } from '@components/ui/context'
import { Page } from '@commerce/types/page'
import { Navbar } from '@components/common'
import { Category } from '@commerce/types/site'
import ShippingView from '@components/checkout/ShippingView'
import CartSidebarView from '@components/cart/CartSidebarView'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Sidebar, LoadingDots } from '@components/ui'
import PaymentMethodView from '@components/checkout/PaymentMethodView'
import CheckoutSidebarView from '@components/checkout/CheckoutSidebarView'
import { CheckoutProvider } from '@components/checkout/context'
import MenuSidebarView, { Link } from '../UserNav/MenuSidebarView'
import { LazyMotion, domAnimation } from 'framer-motion'
import LoginView from '@components/auth/LoginView'
import s from './Layout.module.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { options } from '@config/scroll'
import Footer from '../Footer'
import MobileNavbar from '../Navbar/MobileNav'

const Loading = () => (
  <div className="flex align-center text-center justify-center">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const SignUpView = dynamic(() => import('@components/auth/SignUpView'), {
  ...dynamicProps,
})

const ForgotPassword = dynamic(
  () => import('@components/auth/ForgotPassword'),
  {
    ...dynamicProps,
  }
)

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  ...dynamicProps,
})

const Modal = dynamic(() => import('@components/ui/Modal'), {
  ...dynamicProps,
  ssr: false,
})

interface Props {
  pageProps: {
    pages?: Page[]
    categories: Category[]
  }
}

const ModalView: FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'LOGIN_VIEW' && <LoginView />}
      {modalView === 'SIGNUP_VIEW' && <SignUpView />}
      {modalView === 'FORGOT_VIEW' && <ForgotPassword />}
    </Modal>
  )
}

const ModalUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI()
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null
}

const SidebarView: FC<{
  sidebarView: string
  closeSidebar(): any
  links: Link[]
}> = ({ sidebarView, closeSidebar, links }) => {
  return (
    <Sidebar onClose={closeSidebar}>
      {sidebarView === 'MOBILEMENU_VIEW' && <MenuSidebarView links={links} />}
      {sidebarView === 'CART_VIEW' && <CartSidebarView />}
      {sidebarView === 'CHECKOUT_VIEW' && <CheckoutSidebarView />}
      {sidebarView === 'PAYMENT_VIEW' && <PaymentMethodView />}
      {sidebarView === 'SHIPPING_VIEW' && <ShippingView />}
    </Sidebar>
  )
}

const SidebarUI: FC<{ links: any }> = ({ links }) => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI()
  return displaySidebar ? (
    <SidebarView
      sidebarView={sidebarView}
      closeSidebar={closeSidebar}
      links={links}
    />
  ) : null
}

const cookietitle =
  'This website uses cookies, even from third parties. By closing the pop-up, scrolling or clicking, you consent to the use of cookies. '

const Layout: FC<Props> = ({
  children,
  pageProps: { categories = [], ...pageProps },
}) => {
  const router = useRouter()
  const { asPath } = useRouter()
  const containerRef = useRef(null)
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { locale = 'en-US' } = useRouter()

  const navBarlinks = categories.slice(0, 5).map((c) => ({
    label: c.name,
    desc: c.description,
    href: `/search/${c.slug}`,
  }))

  return (
    <CommerceProvider locale={locale}>
      <LazyMotion features={domAnimation}>
        <LocomotiveScrollProvider
          options={options}
          location={asPath}
          containerRef={containerRef}
          onLocationChange={(scroll: any) =>
            scroll.scrollTo(0, { duration: 0, disableLerp: true })
          }
          watch={[]}
        >
          <MobileNavbar links={navBarlinks} pages={pageProps.pages} />
          {/* <Navbar links={navBarlinks} /> */}
          <div className={cn(s.root)}>
            <main
              ref={containerRef}
              data-scroll-container
              id="scroll-container"
            >
              {children}

              <footer data-scroll-section>
                <Footer pages={pageProps.pages} />
              </footer>
            </main>
            <ModalUI />
            <CheckoutProvider>
              <SidebarUI links={navBarlinks} />
            </CheckoutProvider>
            <FeatureBar
              title={cookietitle}
              hide={acceptedCookies}
              action={
                <div className="flex" style={{ gap: '0.2em' }}>
                  <button
                    onClick={() => onAcceptCookies()}
                    style={{ width: '70%' }}
                  >
                    Accept cookies
                  </button>
                  <button
                    onClick={(e: any) => {
                      e.preventDefault()
                      router.push('/privacy-policy')
                    }}
                    style={{
                      width: '30%',
                      background: 'transparent',
                      color: 'var(--text-color)',
                      border: '1px solid var(--button-bg)',
                    }}
                  >
                    Read
                  </button>
                </div>
              }
            />
          </div>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </CommerceProvider>
  )
}

export default Layout
