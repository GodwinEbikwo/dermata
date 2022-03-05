import styled from 'styled-components'

export const FooterStyles = styled.div`
  position: relative;
  background: var(--sage2);
  margin-top: var(--spacer);
`

export const FooterInner = styled.div`
  overflow: hidden;
  position: relative;

  .sitetitle {
    display: flex;
    align-items: center;
    letter-spacing: var(--ls-md);
    line-height: 1;
    font-size: var(--size-500);
  }
`

export const FooterGrid = styled.div`
  display: grid;
  gap: 1em;
  margin: 20px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    margin: 5px 0px 0px 0px;
    padding: 5px 0;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
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

  .end {
    @media (min-width: 940px) {
      display: flex;
      justify-content: flex-end;
    }
  }
`

export const MenuFooter = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: var(--spacer-half) 0;

  li {
    padding: 0.25rem 0;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    li {
      margin: 0 0.5em;
    }
  }
`
