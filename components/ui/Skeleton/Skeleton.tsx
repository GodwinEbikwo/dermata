import React, { CSSProperties } from 'react'
import cn from 'classnames'
import px from '@lib/to-pixels'
import styled from 'styled-components'

interface SkeletonProps {
  show?: boolean
  block?: boolean
  className?: string
  style?: CSSProperties
  width?: string | number
  height?: string | number
  boxHeight?: string | number
}

const Skeleton: React.FC<SkeletonProps> = ({
  style,
  width,
  height,
  children,
  className,
  show = true,
  boxHeight = height,
}) => {
  // Automatically calculate the size if there are children
  // and no fixed sizes are specified
  const shouldAutoSize = !!children && !(width || height)

  // Defaults
  width = width || 24
  height = height || 24
  boxHeight = boxHeight || height

  return (
    <Root
      className={cn({}, className, {
        ['show']: show,
        ['wrapper']: shouldAutoSize,
        ['loaded']: !shouldAutoSize && !!children,
      })}
      style={
        shouldAutoSize
          ? {}
          : {
              minWidth: px(width),
              minHeight: px(height),
              marginBottom: `calc(${px(boxHeight)} - ${px(height)})`,
              ...style,
            }
      }
    >
      {children}
    </Root>
  )
}

export default Skeleton

const Root = styled.span`
  display: block;
  background-image: linear-gradient(
    270deg,
    var(--sage4),
    var(--sage2),
    var(--sage4),
    var(--sage2)
  );
  background-size: 400% 100%;
  animation: loading 8s ease-in-out infinite;

  &.wrapper {
    display: block;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      background-image: linear-gradient(
        270deg,
        var(--sage4),
        var(--sage2),
        var(--sage4),
        var(--sage2)
      );
      background-size: 400% 100%;
      animation: loading 8s ease-in-out infinite;
    }

    &:not(.show)::before {
      content: none;
    }
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`
