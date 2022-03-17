import { FC, useEffect, useState, useCallback } from 'react'
import { Button, Input } from '@components/ui'
import useLogin from '@framework/auth/use-login'
import { useUI } from '@components/ui/context'
import { validate } from 'email-validator'
import { FormBottom, FormInner, FormRoot, FormLogoBox } from './AuthStyles'

interface Props {}

const LoginView: FC<Props> = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const { setModalView, closeModal } = useUI()

  const login = useLogin()

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await login({
        email,
        password,
      })
      setLoading(false)
      closeModal()
    } catch ({ errors }) {
      setMessage(errors[0].message)
      setLoading(false)
      setDisabled(false)
    }
  }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <FormRoot onSubmit={handleLogin}>
      <FormLogoBox>
        <h3>DERMATA</h3>
      </FormLogoBox>

      <FormInner>
        {message && (
          <div className="message">
            {message}. Did you {` `}
            <a className="message" onClick={() => setModalView('FORGOT_VIEW')}>
              forgot your password?
            </a>
          </div>
        )}
        <Input type="email" placeholder="Email" onChange={setEmail} />
        <Input type="password" placeholder="Password" onChange={setPassword} />

        <Button
          variant="slim"
          type="submit"
          loading={loading}
          disabled={disabled}
        >
          Log In
        </Button>
        <FormBottom>
          <div className="inner">
            <span className="grey-text">Don't have an account?</span>
            {` `}
            <a
              className="link link--metis"
              onClick={() => setModalView('SIGNUP_VIEW')}
            >
              Sign Up
            </a>
          </div>
          <div className="inner">
            <a
              className="link link--metis"
              onClick={() => setModalView('FORGOT_VIEW')}
            >
              Forgot your password?
            </a>
          </div>
        </FormBottom>
      </FormInner>
    </FormRoot>
  )
}

export default LoginView
