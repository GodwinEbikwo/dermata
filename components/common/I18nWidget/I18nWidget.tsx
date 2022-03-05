/* eslint-disable @next/next/no-img-element */
import cn from 'classnames'
import Link from 'next/link'
import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import s from './I18nWidget.module.css'
import ClickOutside from '@lib/click-outside'
interface LOCALE_DATA {
  name: string
  img: {
    filename: string
    alt: string
  }
}

const LOCALES_MAP: Record<string, LOCALE_DATA> = {
  es: {
    name: 'Español',
    img: {
      filename: 'flag-es-co.svg',
      alt: 'Bandera Colombiana',
    },
  },
  'en-US': {
    name: 'English',
    img: {
      filename: 'flag-en-us.svg',
      alt: 'US Flag',
    },
  },
}

const I18nWidget: FC = () => {
  const [display, setDisplay] = useState(false)
  const {
    locale,
    locales,
    defaultLocale = 'en-US',
    asPath: currentPath,
  } = useRouter()

  const options = locales?.filter((val: any) => val !== locale)
  const currentLocale = locale || defaultLocale

  return (
    <ClickOutside active={display} onClick={() => setDisplay(false)}>
      <nav className={s.root}>
        <div
          className="flex items-center relative"
          onClick={() => setDisplay(!display)}
        >
          <button className={s.button} aria-label="Language selector">
            <img
              width="15"
              height="15"
              className="block"
              src={`/${LOCALES_MAP[currentLocale].img.filename}`}
              alt={LOCALES_MAP[currentLocale].img.alt}
            />
          </button>
        </div>
        <div className={s.abs}>
          {options?.length && display ? (
            <div className={s.dropdownMenu}>
              <ul>
                {options.map((locale: string) => (
                  <li key={locale}>
                    <Link href={currentPath} locale={locale}>
                      <a
                        className={cn(s.item)}
                        onClick={() => setDisplay(false)}
                      >
                        {LOCALES_MAP[locale].name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </ClickOutside>
  )
}

export default I18nWidget
