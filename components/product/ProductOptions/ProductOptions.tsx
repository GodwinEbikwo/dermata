import { memo } from 'react'
import { Swatch } from '@components/product'
import { ProductOption } from '@commerce/types/product'
import { SelectedOptions } from '../helpers'

interface ProductOptionsProps {
  options: ProductOption[]
  selectedOptions: SelectedOptions
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  return (
    <>
      {options.map((opt) => (
        <div
          style={{ marginBottom: 'calc(var(--spacer) - 1rem)' }}
          key={opt.displayName}
        >
          <span className="text-uppercase" style={{ fontWeight: 500 }}>
            {opt.displayName}
          </span>
          <div
            role="listbox"
            className="flex flex-row"
            style={{ padding: 'var(--spacer-half) 0' }}
          >
            {opt.values.map((v, i: number) => {
              const active = selectedOptions[opt.displayName.toLowerCase()]
              return (
                <Swatch
                  key={`${opt.id}-${i}`}
                  active={v.label.toLowerCase() === active}
                  variant={opt.displayName}
                  color={v.hexColors ? v.hexColors[0] : ''}
                  label={v.label}
                  onClick={() => {
                    setSelectedOptions((selectedOptions) => {
                      return {
                        ...selectedOptions,
                        [opt.displayName.toLowerCase()]: v.label.toLowerCase(),
                      }
                    })
                  }}
                />
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}

export default memo(ProductOptions)
