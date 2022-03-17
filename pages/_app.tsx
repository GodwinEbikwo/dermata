import '@assets/main.css'
import { FC } from 'react'
import { AppProps } from 'next/app'
import { ManagedUIContext } from '@components/ui/context'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import AppProvider from '@context/search-context'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const Layout = (Component as any).Layout || Noop

  return (
    <ManagedUIContext>
      <AppProvider>
        <AnimatePresence exitBeforeEnter>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </AnimatePresence>
      </AppProvider>
    </ManagedUIContext>
  )
}
