import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { GetStaticPropsContext } from 'next'
import { m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { fade } from '@config/transitions'
import { Refunds } from '@components/policies'

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

export default function RefundPage() {
  return (
    <>
      <NextSeo title="Home" />
      <m.div initial="initial" animate="enter" exit="exit" data-scroll-section>
        <m.div variants={fade}>
          <Refunds />
        </m.div>
      </m.div>
    </>
  )
}

RefundPage.Layout = Layout
