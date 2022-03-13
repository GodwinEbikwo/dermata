/* eslint-disable react/display-name */
import React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import styled from 'styled-components'
import { CaretDownIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

const StyledMenu = styled(NavigationMenuPrimitive.Root)`
  z-index: 1;
  width: 100%;
`

const StyledList = styled(NavigationMenuPrimitive.List)`
  display: flex;
  justify-content: center;
  padding: 4px 0px;
  border-radius: 0px;
  list-style: none;
`

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger)`
  outline: none;
  user-select: none;
  border-radius: 0px;
  line-height: 1;
  padding: 0px;
  margin-top: 1.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  transition: all 300ms ease;
`

const StyledCaret = styled(CaretDownIcon)`
  position: relative;
  top: 0.85px;
  color: inherit;

  [data-state='open'] & {
    transform: rotate(-180deg);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 250ms ease;
  }
`

// eslint-disable-next-line react/display-name
const StyledTriggerWithCaret = React.forwardRef(
  ({ children, ...props }: any, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
)

const StyledLink = styled(NavigationMenuPrimitive.Link)`
  outline: none;
  user-select: none;
  font-weight: 500;
  border-radius: 0px;
  line-height: 1;
  padding: 8px 12px;

  &:focus {
    position: relative;
    box-shadow: 0 0 0 1px var(--sage8);
  }

  /* &:hover {
    background-color: var(--sage3);
  } */

  display: block;
  text-decoration: none;
`

const StyledContent = styled(NavigationMenuPrimitive.Content)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 0em;

  [data-state='open'] & {
    img {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  [data-state='close'] & {
    img {
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transform: scale3d(1.25, 1.25, 1.25);
      transform-origin: 50% 50%;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition-delay: 0.25s;
    transform-origin: 50% 50%;
    transition: transform 1.35s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;
`

const StyledArrow = styled.div`
  position: relative;
  top: 70%;
  width: 10px;
  height: 10px;
  left: -10%;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
  background-color: var(--button-bg);
`

const StyledViewport = styled(NavigationMenuPrimitive.Viewport)`
  --height: 360px;
  --width: 600px;
  display: flex;

  position: relative;
  transform-origin: top center;
  top: 70%;
  background-color: var(--sage2);
  width: 100%;
  border-radius: 0px;
  overflow: hidden;
  margin-top: 10px;
  height: var(--height);
  overflow-y: scroll;
  border: 1px solid var(--border-color);

  @media only screen and (min-width: 600px) {
    width: var(--width);
  }
`

// Exports
const NavigationMenu = StyledMenu
const NavigationMenuList = StyledList
const NavigationMenuItem = NavigationMenuPrimitive.Item
const NavigationMenuTrigger = StyledTriggerWithCaret
const NavigationMenuLink = StyledLink
const NavigationMenuContent = StyledContent
const NavigationMenuViewport = StyledViewport

// Your app...
const ContentList = styled.ul`
  display: flex;
  padding: 0 1rem;
  margin-top: 1rem;
  flex-direction: column;
  list-style: none;

  @media only screen and (min-width: 600px) {
    width: auto;
  }
`

const ListItem = styled.li``

const LinkTitle = styled.div`
  font-weight: 400;
  line-height: 1.2;
`

const LinkText = styled.p`
  all: unset;
  line-height: 1.6;
  font-weight: initial;
  color: var(--accent-4);
  text-transform: none;
`

const ContentListItem = React.forwardRef(
  ({ children, title, ...props }: any, forwardedRef) => (
    <ListItem data-scroll>
      <NavigationMenuLink {...props} ref={forwardedRef}>
        <LinkTitle>
          <a className="link link--metis">{title}</a>
        </LinkTitle>
        <LinkText>{children}</LinkText>
      </NavigationMenuLink>
    </ListItem>
  )
)

const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: -15%;
  perspective: 2000px;
  padding-top: 0.5rem;
`

export function NavDropDown({ links }: any) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <a className="link link--metis">SHOP</a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList>
              <ContentListItem title="Shop all" href="/search" />
              {links?.map((l: any) => (
                <ContentListItem
                  key={l.href}
                  title={l.label}
                  href={l.href}
                ></ContentListItem>
              ))}
            </ContentList>
            <div
              data-scroll
              style={{ width: '100%', height: '360px' }}
              className="relative overflow-hidden"
            >
              <Image
                quality={100}
                className="limg"
                priority={true}
                layout="fill"
                objectFit="cover"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1647085600/hands_azctj5.webp"
                alt="abstract"
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  )
}
