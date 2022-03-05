import { FC, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { ChevronRight } from '@components/icons'

interface AccordionProps {
  i: any
  expanded: boolean
  setExpanded: any
  title: string
  children: any
}

const AccordionComponent: FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  title,
  children,
}) => {
  const isOpen = i === expanded
  const toggle = () => setExpanded(isOpen ? false : i)

  return (
    <AccordionBody>
      <m.header className="header" initial={false} onClick={toggle}>
        <div className="flex align-center">
          <m.div
            className="chevron-root"
            initial={false}
            animate={{
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            <ChevronRight />
          </m.div>
          <span className="title">{title}</span>
        </div>
      </m.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            className="overflow-hidden"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <m.div
              variants={{
                collapsed: { opacity: 0 },
                open: { opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
              className="content-placeholder"
            >
              <>{children}</>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </AccordionBody>
  )
}

const Accordion = ({ id, title, children }: any) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <AccordionComponent
      i={id}
      expanded={expanded}
      setExpanded={setExpanded}
      title={title}
    >
      {children}
    </AccordionComponent>
  )
}

export default Accordion

const AccordionBody = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }

  .header {
    cursor: pointer;
    padding: 0;
    width: 100%;
  }

  .title {
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-weight: 500;
  }

  .content-placeholder {
    padding: 0 1.5rem;
  }

  .chevron-root {
    margin-right: 3px;
    padding-top: 6px;
  }
`
