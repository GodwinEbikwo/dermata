import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 5rem;
  min-height: 100vh;
  padding-bottom: var(--spacer-md);

  @media (min-width: 1252px) {
    margin-top: 17vh;
    padding-bottom: 10vh;
  }
`

export const SearchContainerInner = styled.div`
  padding: 0 var(--px-2);
  @media (min-width: 1252px) {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(12, 1fr);
  }

  .s_first {
    .shop_all {
      @media (min-width: 768px) {
        width: 41%;
        margin-bottom: 0.23em;
      }
    }

    .item_header {
      display: block;
      text-transform: uppercase;
      margin: 0.5rem 0;
      letter-spacing: var(--ls-md);

      @media (min-width: 768px) {
        margin: 1rem 0;
        &::after {
          height: 1px;
          width: 1rem;
          content: '';
          display: block;
          background: var(--text-color);
        }
      }
    }

    .s_first_list,
    .s_second_list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;

      @media (min-width: 768px) {
        margin-right: 0;
        flex-direction: column;
      }

      li {
        position: relative;
        margin-right: 0.5em;

        @media (max-width: 767px) {
          margin-right: 0.5em;
          margin-bottom: 0.5em;
          height: 1.5rem;
          width: auto;
          border-radius: 2px;
          border: 1px solid var(--border-color);
          padding: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 0.5em;
        }

        @media (min-width: 768px) {
          margin-bottom: 0.23em;
        }
      }
    }

    @media (min-width: 1252px) {
      display: flex;
      flex-direction: column;
      position: fixed;
    }
  }

  .s_second {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 375px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1252px) {
      grid-gap: 2em;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      height: fit-content;
      grid-column: 1 / span 12;
    }
  }
`
