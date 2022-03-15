import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 4rem;
  padding-bottom: 0;

  @media (min-width: 1252px) {
    margin-top: 8vh;
  }

  .filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 calc((var(--spacer-half) / 2) + 0.4em);
    padding-top: var(--spacer-half);
    font-family: var(--font2);
    border-top: 1px solid var(--border-color);

    @media (min-width: 768px) {
      border-top: none;
      padding-bottom: var(--spacer-half);
    }

    @media (min-width: 1252px) {
      border-top: none;
      padding-top: 0;
      padding-bottom: var(--spacer-half);
    }
  }
`

export const SearchContainerInner = styled.div`
  padding: 0;

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

  /* @media (max-width: 767px) {
    .s_second > *:nth-child(odd) {
      border-left: 1px solid transparent;
    }
  } */

  .s_second > *:nth-child(-n + 1) {
    border-left: 1px solid transparent;
  }

  @media (min-width: 768px) {
    .s_second {
      padding: 0;
    }

    .s_second > * {
      --min: 35ch;
      flex: 1 1 var(--min);
    }

    .s_second > *:last-child {
      border-right: 1px solid var(--border-color);
    }
  }

  @media (min-width: 1252px) {
    .s_second {
      margin-bottom: 0;
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
