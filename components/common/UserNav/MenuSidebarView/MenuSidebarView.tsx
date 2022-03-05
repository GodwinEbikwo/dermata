import Link from 'next/link'
import { FC } from 'react'
import { useUI } from '@components/ui/context'
import SidebarLayout from '@components/common/SidebarLayout'
import { Link as LinkProps } from '.'

interface MenuProps {
  links?: LinkProps[]
}

const MenuSidebarView: FC<MenuProps> = (props) => {
  const { closeSidebar } = useUI()
  const handleClose = () => closeSidebar()

  return (
    <SidebarLayout handleClose={handleClose}>
      <nav>
        <ul style={{ marginTop: 'var(--spacer)' }}>
          <li style={{ marginBottom: 'var(--spacer-half)' }}>
            <Link href="/search">
              <a onClick={() => closeSidebar()}>
                <h1>All</h1>
              </a>
            </Link>
          </li>

          {props.links?.map((l: any) => (
            <li key={l.href} style={{ marginBottom: 'var(--spacer-half)' }}>
              <Link href={l.href}>
                <a onClick={() => closeSidebar()}>
                  <h1>{l.label}</h1>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SidebarLayout>
  )
}

export default MenuSidebarView
