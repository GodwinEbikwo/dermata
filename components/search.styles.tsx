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

    @media (max-width: 767px) {
      border-left: 1px solid var(--border-color);
      border-right: 1px solid var(--border-color);
    }

    @media (min-width: 768px) {
      /* border-top: none; */
      padding-bottom: var(--spacer-half);
    }

    @media (min-width: 1252px) {
      padding-top: 1rem;
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
    padding-top: 1rem;
    border-left: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }

  .s_second > * {
    --min: 20ch;
    flex: 1 1 var(--min);
    border-top: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }

  @media (min-width: 768px) {
    .s_second {
      padding: 0;
    }

    .s_second > * {
      --min: 35ch;
      flex: 1 1 var(--min);
    }
  }

  @media (min-width: 1252px) {
    .s_second {
      margin-bottom: 0;
    }

    .s_second > *:first-child {
      border-left: none;
    }
  }
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
