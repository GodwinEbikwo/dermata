import { m } from 'framer-motion'

const Path = (props: any) => (
  <m.path
    fill="transparent"
    strokeWidth="1.2"
    stroke="var(--nav-toggle)"
    strokeLinecap="square"
    {...props}
  />
)

export const MenuToggle = ({ toggle }: any) => (
  <button
    aria-label="menu toggle"
    onClick={toggle}
    className="cursor-pointer"
    style={{ marginTop: '0.15em' }}
  >
    <svg width="24" height="24" viewBox="0 0 23 23">
      <Path
        variants={{
          exit: { d: 'M 2 2.5 L 30 2.5' },
          enter: {
            d: 'M 3 16.5 L 17 2.5',
            transition: {
              ease: [0.215, 0.61, 0.355, 1],
            },
          },
        }}
        transition={{ duration: 0.35 }}
      />
      <Path
        d="M 2 9.423 L 30 9.423"
        variants={{
          exit: { opacity: 1 },
          enter: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        d="M 2 16.346 L 30 16.346"
        variants={{
          exit: { opacity: 0 },
          enter: {
            opacity: 1,
            d: 'M 3 2.5 L 17 16.346',
            transition: {
              ease: [0.215, 0.61, 0.355, 1],
            },
          },
        }}
        transition={{ duration: 0.35 }}
      />
    </svg>
  </button>
)
