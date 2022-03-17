import styled from 'styled-components'

export const NavHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
`
export const NavHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem var(--px-2);
  backdrop-filter: saturate(180%) blur(20px);
  font-size: var(--fs-static);
  background: var(--bg);
  font-family: var(--font2);
  border-bottom: 1px solid var(--border-color);

  @media (min-width: 1024px) {
    padding: 0.5rem var(--px-2);
  }

  .logo_container {
    flex: 1 1 0%;
  }
  .logo {
    cursor: pointer;
    font-family: var(--font);
    transition: transform 200ms ease-in-out;
  }
  .nav_left {
    display: flex;
    align-items: center;
  }

  .navMenu {
    display: none;
    text-transform: uppercase;
    & > * + * {
      position: relative;
      margin-left: 1.5rem;
    }

    @media (min-width: 1024px) {
      display: inline-flex;
    }
  }

  .nav_link {
    display: inline-flex;
    align-items: center;
  }
  .userNav_Box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 0%;
    & > * + * {
      margin-top: 2rem;
    }
  }
  .userNav_Box_Inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    & > * + * {
      position: relative;
      margin-left: 1rem;
    }
  }
`
