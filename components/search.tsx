import Link from 'next/link'
import { SearchContainer, SearchContainerInner } from './search.styles'
import cn from 'classnames'
import { SearchPropsType } from '@lib/search-props'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@components/common'
import { Product } from '@commerce/types/product'
import { Skeleton } from '@components/ui'
import useSearch from '@framework/product/use-search'
import getSlug from '@lib/get-slug'
import rangeMap from '@lib/range-map'
import { m } from 'framer-motion'
import { fade } from '@config/transitions'
import { ProductCard } from './product'
import {
  filterQuery,
  getCategoryPath,
  getDesignerPath,
  useSearchMeta,
} from '@lib/search'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  StyledContent,
  StyledItemList,
} from './ui/DropDown/DropDown'

const SORT = {
  'trending-desc': 'Trending',
  'latest-desc': 'Latest arrivals',
  'price-asc': 'Price: Low to high',
  'price-desc': 'Price: High to low',
}

export default function Search({ categories, brands }: SearchPropsType) {
  const [activeFilter, setActiveFilter] = useState('')
  const [toggleFilter, setToggleFilter] = useState(false)

  const router = useRouter()
  const { asPath, locale } = router
  const { q, sort } = router.query

  const query = filterQuery({ sort })

  const { pathname, category, brand } = useSearchMeta(asPath)
  const activeCategory = categories.find((cat: any) => cat.slug === category)
  const activeBrand = brands.find(
    (b: any) => getSlug(b.node.path) === `brands/${brand}`
  )?.node

  const { data } = useSearch({
    search: typeof q === 'string' ? q : '',
    categoryId: activeCategory?.id,
    brandId: (activeBrand as any)?.entityId,
    sort: typeof sort === 'string' ? sort : '',
    locale,
  })

  const handleClick = (event: any, filter: string) => {
    if (filter !== activeFilter) {
      setToggleFilter(true)
    } else {
      setToggleFilter(!toggleFilter)
    }
    setActiveFilter(filter)
  }

  return (
    <m.div initial="initial" animate="enter" exit="exit" data-scroll-section>
      <m.div variants={fade}>
        <SearchContainer>
          <div className="px relative">
            {(q || activeCategory || activeBrand) && (
              <div
                style={{
                  marginBottom: 'var(--spacer-half)',
                  transition: 'all ease-in 750ms',
                }}
              >
                {data ? (
                  <>
                    <div
                      style={{
                        transition: 'all ease-in 300ms',
                        fontWeight: 600,
                      }}
                      className={cn('animated text-uppercase', {
                        fadeIn: data.found,
                        hidden: !data.found,
                      })}
                    >
                      <span>－</span> {activeCategory?.name} (
                      {data.products.length} item
                      {data.products.length === 1 ? '' : 's'})
                    </div>
                    <span
                      className={cn('animated', {
                        fadeIn: !data.found,
                        hidden: data.found,
                      })}
                    >
                      {q ? (
                        <>
                          There are no products that match "<strong>{q}</strong>
                          "
                        </>
                      ) : (
                        <>
                          There are no products that match the selected
                          category.
                        </>
                      )}
                    </span>
                  </>
                ) : q ? (
                  <>
                    Searching for: "<strong>{q}</strong>"
                  </>
                ) : (
                  <>Searching...</>
                )}
              </div>
            )}
          </div>

          <div
            className="filters"
            style={{ justifyContent: 'space-between', marginBottom: '1em' }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  style={{ fontWeight: 500, color: 'var(--text-color)' }}
                  className="cursor-pointer text-uppercase"
                >
                  Filter
                </button>
              </DropdownMenuTrigger>

              <StyledContent sideOffset={0}>
                {categories.map((cat: any) => (
                  <StyledItemList key={cat.path}>
                    <Link
                      key={cat.path}
                      href={{
                        pathname: getCategoryPath(cat.path, brand),
                        query,
                      }}
                    >
                      <a
                        arial-label={cat.name}
                        className="link link--metis"
                        onClick={(e) => handleClick(e, 'categories')}
                      >
                        {cat.name}
                      </a>
                    </Link>
                  </StyledItemList>
                ))}
              </StyledContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  style={{ fontWeight: 500, color: 'var(--text-color)' }}
                  className="cursor-pointer text-uppercase"
                >
                  Sort by
                </button>
              </DropdownMenuTrigger>

              <StyledContent sideOffset={0}>
                {Object.entries(SORT).map(([key, text]) => (
                  <StyledItemList key={key}>
                    <Link
                      href={{
                        pathname,
                        query: filterQuery({ q, sort: key }),
                      }}
                    >
                      <a
                        onClick={(e) => handleClick(e, 'sort')}
                        className="link link--metis"
                      >
                        {text}
                      </a>
                    </Link>
                  </StyledItemList>
                ))}
              </StyledContent>
            </DropdownMenu>
          </div>

          <SearchContainerInner data-scroll id="search-info">
            <ul className="s_second">
              {data ? (
                <>
                  {data.products.map((product: Product, i: number) => (
                    <li key={product.path}>
                      <ProductCard
                        className={cn('animated', {
                          fadeIn: data.found,
                          hidden: !data.found,
                        })}
                        variant="simple"
                        product={product}
                        imgProps={{
                          priority: i === 0,
                          width: 666.666667,
                          height: 1000,
                        }}
                      />
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {rangeMap(12, (i) => (
                    <Skeleton key={i}>
                      <div style={{ width: '25rem', height: '20rem' }} />
                    </Skeleton>
                  ))}
                </>
              )}{' '}
            </ul>
          </SearchContainerInner>
        </SearchContainer>
      </m.div>
    </m.div>
  )
}

Search.Layout = Layout
