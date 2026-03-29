import type { ReactNode } from 'react'
import './FormField.scss'

export type FormFieldProps = {
  children: ReactNode
  className?: string
  helperText?: ReactNode
  label: ReactNode
}

export function FormField({ children, className, helperText, label }: FormFieldProps) {
  const classes = ['ui-form-field', className ?? ''].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <span className="ui-form-field-label">{label}</span>
      <div className="ui-form-field-control">{children}</div>
      {helperText ? <span className="ui-form-field-helper">{helperText}</span> : null}
    </div>
  )
}
