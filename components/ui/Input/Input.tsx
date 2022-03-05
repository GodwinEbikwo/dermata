import cn from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const InputRoot = styled.input`
  width: 100%;
  appearance: none;
  background: transparent;
  border: 0.85px solid var(--input-border-color);
  padding: 0.5rem var(--spacer-half);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: var(--size-300);
  color: var(--black);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--black);
  }
`

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: (...args: any[]) => any
}

const Input: React.FC<InputProps> = (props) => {
  const { className, children, onChange, ...rest } = props

  const rootClassName = cn({}, className)

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <label>
      <InputRoot
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  )
}

export default Input
