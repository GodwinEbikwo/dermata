import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import commerce from '@lib/api/commerce'
import { Text } from '@components/ui'
import { Layout } from '@components/common'
import getSlug from '@lib/get-slug'
import { missingLocaleInPages } from '@lib/usage-warns'
import { Page } from '@commerce/types/page'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { fade } from '@config/transitions'
import { m } from 'framer-motion'

export async function getStaticProps({
  preview,
  params,
  locale,
  locales,
}: GetStaticPropsContext<{ pages: string[] }>) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  const path = params?.pages.join('/')
  const slug = locale ? `${locale}/${path}` : path
  const pageItem = pages.find((p: Page) =>
    p.url ? getSlug(p.url) === slug : false
  )
  const data =
    pageItem &&
    (await commerce.getPage({
      variables: { id: pageItem.id! },
      config,
      preview,
    }))

  const page = data?.page

  if (!page) {
    // We throw to make sure this fails at build time as this is never expected to happen
    throw new Error(`Page with slug '${slug}' not found`)
  }

  return {
    props: { pages, page, categories },
    revalidate: 60 * 60, // Every hour
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const config = { locales }
  const { pages }: { pages: Page[] } = await commerce.getAllPages({ config })
  const [invalidPaths, log] = missingLocaleInPages()
  const paths = pages
    .map((page) => page.url)
    .filter((url) => {
      if (!url || !locales) return url
      // If there are locales, only include the pages that include one of the available locales
      if (locales.includes(getSlug(url).split('/')[0])) return url

      invalidPaths.push(url)
    })
  log()

  return {
    paths,
    fallback: 'blocking',
  }
}

export default function Pages({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  return router.isFallback ? (
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <>
      <NextSeo title={page.name} />
      <m.div initial="initial" animate="enter" exit="exit" data-scroll-section>
        <m.div variants={fade}>
          <Root>{page?.body && <Text html={page.body} />}</Root>
        </m.div>
      </m.div>
    </>
  )
}

const Root = styled.div`
  margin: 10vh 0;
  padding: 0 var(--px-2);

  @media (min-width: 1024px) {
    margin-top: 10vh;
  }
`

Pages.Layout = Layout
