import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import './Select.scss'

export type SelectOption = {
  label: string
  value: string
}

export type SelectProps = Omit<ComponentPropsWithoutRef<'select'>, 'children' | 'className'> & {
  className?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
  selectClassName?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, disabled, error, options, placeholder, selectClassName, ...props },
  ref,
) {
  const wrapperClasses = ['ui-select-field', className ?? ''].filter(Boolean).join(' ')
  const selectClasses = [
    'ui-select-field-control',
    error ? 'ui-select-field-control-error' : '',
    selectClassName ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapperClasses}>
      <select
        {...props}
        ref={ref}
        className={selectClasses}
        disabled={disabled}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="ui-select-field-error">{error}</span> : null}
    </div>
  )
})
