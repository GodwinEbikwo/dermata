import React, { FC } from 'react'
import s from './Quantity.module.css'
import { Cross, Plus, Minus } from '@components/icons'
import cn from 'classnames'
export interface QuantityProps {
  value: number
  increase: () => any
  decrease: () => any
  handleRemove: React.MouseEventHandler<HTMLButtonElement>
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  max?: number
}

const Quantity: FC<QuantityProps> = ({
  value,
  increase,
  decrease,
  handleChange,
  handleRemove,
  max = 6,
}) => {
  return (
    <div className={s.root}>
      <button
        onClick={handleRemove}
        aria-label="remove product"
        className="text-uppercase"
        style={{ fontFamily: 'var(--font2)', textDecoration: 'underline' }}
      >
        Remove
      </button>

      <div className={s.inputBox}>
        <button
          aria-label="reduce quantity"
          type="button"
          onClick={decrease}
          className={s.actions}
          style={{ borderRight: 'none' }}
          disabled={value <= 1}
        >
          <Minus width={18} height={18} />
        </button>

        <label className={s.label}>
          <input
            className={s.input}
            onChange={(e) =>
              Number(e.target.value) < max + 1 ? handleChange(e) : () => {}
            }
            value={value}
            type="number"
            max={max}
            min="0"
            readOnly
          />
        </label>

        <button
          aria-label="increase quantity"
          type="button"
          onClick={increase}
          className={cn(s.actions)}
          style={{ marginLeft: '-1px' }}
          disabled={value < 1 || value >= max}
        >
          <Plus width={18} height={18} />
        </button>
      </div>
    </div>
  )
}

export default Quantity
