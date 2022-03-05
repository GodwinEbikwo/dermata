import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import styled, { keyframes } from 'styled-components'
import { ArrowRight, Contact, Orders, Profile } from '@components/icons'
import { useRouter } from 'next/router'

export const slideUpAndFade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
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
    background-color: var(--accent-2);
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
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <a className="cursor-pointer">
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
          <DropdownMenuItem disabled>Derma</DropdownMenuItem>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default DropdownMenuDemo
