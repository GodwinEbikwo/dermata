import styled from 'styled-components'

export const FooterStyles = styled.div`
  position: relative;
  background-color: var(--footer-bg);
  padding: 0px 0px var(--spacer-half) 0px;
  min-height: 40vh;
  margin-top: 0px;
  color: var(--footer-text);
`

export const FooterInner = styled.div`
  overflow: hidden;
  position: relative;

  .sitetitle {
    display: flex;
    align-items: center;
    letter-spacing: var(--ls-sm);
    line-height: 1;
    font-weight: 500;
  }
`

export const FooterGrid = styled.div`
  display: grid;
  gap: 1em;
  margin: 20px 0px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    margin-top: 5px;
    padding: 5px 0px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--px-2);
  text-align: left;

  @media (min-width: 940px) {
    padding: var(--spacer);
  }

  .search__input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    padding: 0.5em 0.5em;
    font-size: var(--fs-static);
    transition: 180ms box-shadow ease-in-out;
    cursor: auto;
    text-align: start;
    border: 1px solid var(--footer-bc);
    border-right: 0px;
    background-color: transparent;
    font-weight: 500;
    color: var(--text-color);
  }

  .search__input:focus {
    border: 1px solid white;
    color: white;
  }

  .search_btn {
    border: 1px solid var(--footer-bc);
    padding: 0.15em 0.5em;
    text-transform: uppercase;
    font-weight: 500;
    color: inherit;
    transition: all 300ms ease;
  }

  .search_btn:hover {
    border: 1px solid white;
  }

  .end {
    @media (min-width: 940px) {
      display: flex;
      justify-content: flex-end;
    }
  }
`

export const MenuFooter = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: var(--spacer-half) 0px;

  li {
    text-transform: uppercase;
    font-weight: 500;
    color: var(--footer-text);
  }

  li:not(:last-child) {
    margin-bottom: 0.5em;
  }
`
