import { FC, useEffect, useState, useCallback } from 'react'
import { validate } from 'email-validator'
import { useUI } from '@components/ui/context'
import { Button, Input } from '@components/ui'
import { FormRoot, FormBottom, FormInner, FormLogoBox } from './AuthStyles'

interface Props {}

const ForgotPassword: FC<Props> = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const { setModalView, closeModal } = useUI()

  const handleResetPassword = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }
  }

  const handleValidation = useCallback(() => {
    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email))
    }
  }, [email, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <FormRoot onSubmit={handleResetPassword}>
      <FormLogoBox>
        <h3>DERMATA</h3>
      </FormLogoBox>
      <FormInner>
        {message && <div className="message">{message}</div>}

        <Input placeholder="Email" onChange={setEmail} type="email" />

        <Button
          variant="slim"
          type="submit"
          loading={loading}
          disabled={disabled}
        >
          Recover Password
        </Button>

        <FormBottom>
          <div className="inner">
            <span className="grey-text">Already have an account?</span>
            {` `}
            <a
              className="link link--metis"
              onClick={() => setModalView('SIGNUP_VIEW')}
            >
              Log in
            </a>
          </div>
        </FormBottom>
      </FormInner>
    </FormRoot>
  )
}

export default ForgotPassword
