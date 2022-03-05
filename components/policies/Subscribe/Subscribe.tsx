import React from 'react'
import styled from 'styled-components'

const Subscribe = () => {
  return (
    <RootSubscribe>
      <h2 className="subscribe__title">Let's keep in touch</h2>
      <p className="subscribe__copy">
        Subscribe to keep up with fresh news and exciting updates. We promise
        not to spam you!
      </p>
      <div className="form">
        <input
          type="email"
          className="form__email"
          placeholder="Enter your email address"
        />
        <button className="form__button">Send</button>
      </div>
      <div className="notice">
        <input type="checkbox" />
        <span className="notice__copy">
          I agree to my email address being stored and uses to recieve monthly
          newsletter.
        </span>
      </div>
    </RootSubscribe>
  )
}

export default Subscribe

export const RootSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  .subscribe__title {
    font-weight: 700;
    margin-bottom: var(--spacer-half);
    letter-spacing: var(--ls-md);
  }

  .subscribe__copy {
    max-width: 450px;
    text-align: center;
    margin-bottom: var(--spacer-half);
    line-height: 1.5;
  }

  .form {
    margin-bottom: var(--spacer);
  }

  .form__email {
    padding: 20px 25px;
    border: 1px solid var(--border-color);
    width: 431px;
    color: var(--text-color);
    margin-right: 3px;
  }

  .form__email:focus {
    outline: 1px solid var(--border-color);
  }

  .form__button {
    background: var(--text-color);
    padding: 10px;
    border: none;
    width: 244px;
    height: 65px;
    font-size: 18px;
    color: white;
    transition: all 300ms ease;
  }

  .form__button:hover {
    opacity: 0.75;
  }

  .notice {
    max-width: 50ch;
    text-align: center;
  }
`
