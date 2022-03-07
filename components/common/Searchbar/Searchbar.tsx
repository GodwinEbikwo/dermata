import { FC, memo, useEffect } from 'react'
import cn from 'classnames'
import s from './Searchbar.module.css'
import { useRouter } from 'next/router'
import { useMenu } from '@context/search-context'

interface Props {
  className?: string
  id?: string
}

const Searchbar: FC<Props> = ({ className, id = 'search' }) => {
  const router = useRouter()
  const { menuOpen, setMenuOpen } = useMenu()

  useEffect(() => {
    router.prefetch('/search')
  }, [router])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const q = e.currentTarget.value

      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      )
      setMenuOpen(!menuOpen)
    }
  }

  return (
    <div className={cn(s.root, className)}>
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      <input
        id={id}
        className={s.input}
        placeholder="Search..."
        defaultValue={router.query.q}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}

export default memo(Searchbar)
