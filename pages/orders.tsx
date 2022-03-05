import { GetStaticPropsContext } from 'next'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Button } from '@components/ui'
import { NextSeo } from 'next-seo'
import { m } from 'framer-motion'
import { fade } from '@config/transitions'
import { PageTitle, Root } from './profile'

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

export default function Orders() {
  return (
    <Container>
      <NextSeo title="Orders" />
      <m.div initial="initial" animate="enter" exit="exit" data-scroll-section>
        <m.div variants={fade}>
          <Root>
            <PageTitle>Your Orders</PageTitle>
            <p>No orders found</p>
            <Button href="/search">Go to products page</Button>
          </Root>
        </m.div>
      </m.div>
    </Container>
  )
}

Orders.Layout = Layout
