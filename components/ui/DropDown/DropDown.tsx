import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import styled, { keyframes } from 'styled-components'
import { ArrowRight, Contact, Orders, Profile, Sun } from '@components/icons'
import { useRouter } from 'next/router'
import useLogout from '@framework/auth/use-logout'
import { useTheme } from 'next-themes'

export const slideUpAndFade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const StyledArrow = styled(DropdownMenuPrimitive.Arrow)`
  fill: var(--sage8);
  height: 7px;
  width: 7px;
  margin-left: 3.5px;
`

export const StyledContent = styled(DropdownMenuPrimitive.Content)`
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
        animation-name: ${slideDownAndFade};
      }
      &[data-side='right'] {
        animation-name: ${slideLeftAndFade};
      }
      &[data-side='bottom'] {
        animation-name: ${slideUpAndFade};
      }
      &[data-side='left'] {
        animation-name: ${slideRightAndFade};
      }
    }
  }
`

export const StyledItem = styled(DropdownMenuPrimitive.Item)`
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

  &[data-disabled] {
    color: var(--indigo5);
    pointer-events: none;
  }

  &:focus {
    background-color: var(--sage3);
  }

  &.bold {
    font-weight: 600;
    text-transform: uppercase;
  }
`

export const StyledItemList = styled(DropdownMenuPrimitive.Item)`
  all: unset;
  font-size: inherit;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  width: 100%;
  height: auto;
  padding: 10px 5px;
  position: relative;
  user-select: none;
  cursor: pointer;

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

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
  color: var(--accent-5);

  &:focus > & {
    color: var(--black);
  }

  &[data-disabled] & {
    color: var(--indigo5);
  }
`

const DropdownMenuDemo = () => {
  const router = useRouter()
  const logout = useLogout()
  const { theme, setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <a className="cursor-pointer" style={{ marginTop: '0.3em' }}>
          <Profile />
        </a>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        <DropdownMenuItem
          onSelect={(e: any) => {
            e.preventDefault()
            router.push({
              pathname: '/cart',
            })
          }}
        >
          Cart
          <RightSlot>
            <ArrowRight />
          </RightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={(e: any) => {
            e.preventDefault()
            router.push({
              pathname: '/orders',
            })
          }}
        >
          Orders
          <RightSlot>
            <Orders />
          </RightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={(e: any) => {
            e.preventDefault()
            router.push({
              pathname: '/profile',
            })
          }}
        >
          Profile
          <RightSlot>
            <Profile />
          </RightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={(e: any) => {
            e.preventDefault()
            router.push({
              pathname: '/refunds',
            })
          }}
        >
          Contact
          <RightSlot>
            <Contact />
          </RightSlot>
        </DropdownMenuItem>

        <DropdownMenuItem className="bold" onSelect={() => logout()}>
          logout
        </DropdownMenuItem>

        <DropdownMenuItem
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          onSelect={() => {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }}
        >
          <Sun />
        </DropdownMenuItem>
        {/* <DropdownMenuArrow /> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuDemo
