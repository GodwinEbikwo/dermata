import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 4rem;
  min-height: 100vh;
  padding-bottom: 0;

  @media (min-width: 1252px) {
    margin-top: 8vh;
  }

  .filters {
    display: flex;
    padding: 0 calc((var(--spacer-half) / 2) + 0.2em);
  }
`

export const SearchContainerInner = styled.div`
  padding: 0;

  @media (min-width: 1252px) {
    display: grid;
    grid-gap: 0em;
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
    --gap: 0em;
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
    padding: 1rem 0;
  }

  .s_second > * {
    --min: 15ch;
    flex: 1 1 var(--min);
    border-top: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);
  }

  @media (max-width: 768px) {
    .s_second > *:nth-child(odd) {
      border-left: 1px solid transparent;
    }
  }

  .s_second > *:nth-child(-n + 1) {
    border-left: 1px solid transparent;
  }

  @media (min-width: 768px) {
    .s_second {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2em;
      padding: 0;
    }
  }

  @media (min-width: 1252px) {
    .s_second {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 0px;
      margin-bottom: 0;
      grid-column: 1 / span 12;
    }

    .s_second > * {
      border-top: 1px solid var(--border-color);
      border-left: 1px solid var(--border-color);
      /* border-bottom: 1px solid var(--border-color); */
    }

    .s_second > *:nth-child(-n + 1) {
      border-left: 1px solid transparent;
    }
  }

  /* 
  .s_second {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 375px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1252px) {
      grid-gap: 0px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-column: 1 / span 12;
    }

    @media (min-width: 1252px) {
      & > * {
        border-top: 1px solid var(--border-color);
        border-left: 1px solid var(--border-color);
      }

      & > *:nth-child(-n + 1) {
        border-left: 1px solid transparent;
      }
    }
  } */
`

/* & > li {
        transition: transform 300ms ease;
        grid-column: span 1;
      }

      & > li:nth-child(5) {
        grid-column: span 2;
        grid-row: span 2;
      }

      & > li:nth-child(8) {
        transform: translateY(-13px);
      }

      & > li:nth-child(9) {
        transform: translateY(-13px);
      }

      & > li:nth-child(12) {
        grid-column: span 2;
        grid-row: span 2;
        overflow: hidden;
      }

      & > li:nth-child(13) {
        transform: translateY(-13px);
      }
      & > li:nth-child(14) {
        transform: translateY(-13px);
      } */
