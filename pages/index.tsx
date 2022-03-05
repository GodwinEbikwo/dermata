import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Hero from '@components/common/Hero/Hero'
import { m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { fade } from '@config/transitions'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 15 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="Home" />
      <m.div initial="initial" animate="enter" exit="exit" data-scroll-section>
        <m.div variants={fade}>
          <Hero products={products} />
        </m.div>
      </m.div>
    </>
  )
}

Home.Layout = Layout
