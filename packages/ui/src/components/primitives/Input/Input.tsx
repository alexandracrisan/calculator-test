import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import './Input.scss'

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'className' | 'size'> & {
  className?: string
  error?: string
  inputClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, disabled, error, inputClassName, ...props },
  ref,
) {
  const wrapperClasses = ['ui-input-field', className ?? ''].filter(Boolean).join(' ')
  const inputClasses = [
    'ui-input-field-control',
    error ? 'ui-input-field-control-error' : '',
    inputClassName ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapperClasses}>
      <input
        {...props}
        ref={ref}
        className={inputClasses}
        disabled={disabled}
      />
      {error ? (
        <span className="ui-input-field-error">
          {error}
        </span>
      ) : null}
    </div>
  )
})
