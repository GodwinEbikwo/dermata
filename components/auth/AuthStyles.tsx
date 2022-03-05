import styled from 'styled-components'

export const FormRoot = styled.form`
  display: flex;
  justify-content: space-between;
  padding: var(--spacer-half);
  width: 21rem;
  flex-direction: column;
  transition: all 300ms ease;

  button {
    background: var(--black);
    color: var(--accent);
  }
`

export const FormInner = styled.fieldset`
  display: flex;
  flex-direction: column;

  .message {
    color: blue;
  }

  & > * + * {
    margin-top: 0.75rem;
  }

  .auth_info_box {
    color: var(--button-text);
  }

  .icon_container {
    display: inline-block;
    vertical-align: middle;
    margin-top: 0.4em;
    margin-right: 0.4em;
  }

  strong {
    font-weight: 500;
  }
`

export const FormLogoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--spacer);

  h3 {
    color: var(--black);
    font-weight: 600;
  }
`

export const FormButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 0.25rem;
  text-align: center;
`

export const FormBottom = styled.div`
  padding-top: 0.25rem;
  text-align: center;

  .inner {
    display: inline-block;
    color: var(--button-text);

    a {
      font-weight: 500;
      text-transform: uppercase;
    }
  }
`
