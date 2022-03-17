import { FC, useEffect, useState, useCallback } from 'react'
import { validate } from 'email-validator'
import { Info } from '@components/icons'
import { useUI } from '@components/ui/context'
import { Button, Input } from '@components/ui'
import useSignup from '@framework/auth/use-signup'
import {
  FormBottom,
  FormInner,
  FormRoot,
  FormLogoBox,
  FormButtonBox,
} from './AuthStyles'

interface Props {}

const SignUpView: FC<Props> = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const signup = useSignup()
  const { setModalView, closeModal } = useUI()

  const handleSignup = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await signup({
        email,
        firstName,
        lastName,
        password,
      })
      setLoading(false)
      closeModal()
    } catch ({ errors }) {
      setMessage(errors[0].message)
      setLoading(false)
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
    <FormRoot onSubmit={handleSignup}>
      <FormLogoBox>
        <h3>DERMATA</h3>
      </FormLogoBox>

      <FormInner>
        {message && <div className="message">{message}</div>}
        <Input placeholder="First Name" onChange={setFirstName} />
        <Input placeholder="Last Name" onChange={setLastName} />
        <Input type="email" placeholder="Email" onChange={setEmail} />
        <Input type="password" placeholder="Password" onChange={setPassword} />

        <div className="auth_info_box">
          <span className="icon_container">
            <Info width="15" height="15" />
          </span>
          <span>
            Passwords must be longer than 7 characters and include numbers.{' '}
          </span>
        </div>

        <FormButtonBox>
          <Button
            variant="slim"
            type="submit"
            loading={loading}
            disabled={disabled}
          >
            Sign Up
          </Button>
        </FormButtonBox>

        <FormBottom>
          <div className="inner">
            <span className="grey-text">Already have an account?</span>
            {` `}
            <a
              className="link link--metis"
              onClick={() => setModalView('LOGIN_VIEW')}
            >
              Log In
            </a>
          </div>
        </FormBottom>
      </FormInner>
    </FormRoot>
  )
}

export default SignUpView
