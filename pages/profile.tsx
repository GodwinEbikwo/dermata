import { GetStaticPropsContext } from 'next'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { m } from 'framer-motion'
import { fade } from '@config/transitions'

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

export const Root = styled.div`
  margin: 0 auto;
  max-width: 35rem;

  @media (min-width: 768px) {
    margin-top: 10vh;
    background: var(--profile-bg);
    padding: var(--spacer);
    border: 1px solid var(--border-color);
  }
`

export const PageTitle = styled.div`
  letter-spacing: var(--ls-md);
  font-size: var(--size-700);
  margin-bottom: var(--spacer-half);
  margin-top: var(--spacer-lg);

  @media (min-width: 768px) {
    margin-top: 0;
  }
`
export const SubTitle = styled.h2`
  letter-spacing: var(--ls-md);
`

export default function Profile() {
  const { data } = useCustomer()
  return (
    <Container>
      <NextSeo title="Profile" />
      <m.div initial="initial" animate="enter" exit="exit" data-scroll-section>
        <m.div variants={fade}>
          {data && (
            <Root>
              <article>
                <div>
                  <SubTitle>Full Name</SubTitle>
                  <span>
                    {data.firstName} {data.lastName}
                  </span>
                </div>

                <div className="mt-5">
                  <SubTitle>Email</SubTitle>
                  <span>{data.email}</span>
                </div>
              </article>
            </Root>
          )}
        </m.div>
      </m.div>
    </Container>
  )
}

Profile.Layout = Layout
