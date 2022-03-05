import { FC, ReactNode, Component } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  }

  &.gap {
    gap: 0.5em;
  }
`

interface GridProps {
  className?: string
  children?: ReactNode[] | Component[] | any[]
  layout?: 'A' | 'B' | 'C' | 'D' | 'normal'
  variant?: 'default' | 'filled'
}

const Grid: FC<GridProps> = ({
  className,
  layout = 'A',
  children,
  variant = 'default',
}) => {
  return <Root className={className}>{children}</Root>
}

export default Grid
