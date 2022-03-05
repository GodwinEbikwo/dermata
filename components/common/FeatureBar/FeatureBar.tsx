import cn from 'classnames'
import s from './f.module.css'
import Link from 'next/link'

interface FeatureBarProps {
  className?: string
  title: string
  hide?: boolean
  action?: React.ReactNode
  close?: React.ReactNode
}

const FeatureBar: React.FC<FeatureBarProps> = ({
  title,
  className,
  action,
  hide,
  close,
}) => {
  const rootClassName = cn(
    s.root,
    {
      transform: true,
      'enter-cookies': !hide,
      'exit-cookies': hide,
    },
    className
  )

  return (
    <aside
      className={rootClassName}
      role="dialog"
      aria-live="polite"
      aria-label="cookies consent"
    >
      <div className={s.rootInner}>
        <p className={s.title}>
          {title}
          <Link href="policy">
            <a>Read more</a>
          </Link>
        </p>
        {action && action}
      </div>
    </aside>
  )
}

export default FeatureBar
