/* eslint-disable @next/next/no-img-element */
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import styled, { keyframes } from 'styled-components'
import cn from 'classnames'
import Link from 'next/link'
import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import s from './I18nWidget.module.css'

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

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const StyledArrow = styled(DropdownMenuPrimitive.Arrow)`
  fill: var(--accent-5);
  height: 10px;
  width: 10px;
  margin-left: 13.5px;
`

const StyledContent = styled(DropdownMenuPrimitive.Content)`
  min-width: 220px;
  background-color: var(--bg);
  padding: 10px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.15),
    0px 10px 20px -15px rgba(22, 23, 24, 0.4);

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    will-change: transform, opacity;

    &[data-state='open'] {
      &[data-side='top'] {
        animation-name: ${slideUpAndFade};
      }
      &[data-side='right'] {
        animation-name: ${slideUpAndFade};
      }
      &[data-side='bottom'] {
        animation-name: ${slideUpAndFade};
      }
      &[data-side='left'] {
        animation-name: ${slideUpAndFade};
      }
    }
  }
`

const StyledItem = styled(DropdownMenuPrimitive.Item)`
  all: unset;
  font-size: inherit;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 5px;
  position: relative;
  user-select: none;
  cursor: pointer;
  color: black;

  &[data-disabled] {
    color: var(--indigo5);
    pointer-events: none;
  }

  &:focus {
    background-color: var(--sage3);
  }
`

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuContent = StyledContent
export const DropdownMenuItem = StyledItem
export const DropdownMenuArrow = StyledArrow

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={s.button} aria-label="Language selector">
          <img
            width="15"
            height="15"
            className="block"
            src={`/${LOCALES_MAP[currentLocale].img.filename}`}
            alt={LOCALES_MAP[currentLocale].img.alt}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        <DropdownMenuItem>
          {options?.length && display ? (
            <div className={s.dropdownMenu}>
              <ul>
                {options.map((locale: any) => (
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
        </DropdownMenuItem>

        <DropdownMenuArrow />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default I18nWidget
