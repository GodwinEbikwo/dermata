import '@assets/main.css'
import '@assets/chrome-bug.css'
import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import AppProvider from '@context/search-context'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <AppProvider>
          <AnimatePresence exitBeforeEnter>
            <Layout pageProps={pageProps}>
              <Component {...pageProps} key={router.asPath} />
            </Layout>
          </AnimatePresence>
        </AppProvider>
      </ManagedUIContext>
    </>
  )
}
