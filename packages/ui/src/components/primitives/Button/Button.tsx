import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Spinner } from '../Spinner/Spinner'
import './Button.scss'

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  children: ReactNode
  className?: string
  loading?: boolean
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  className,
  disabled,
  loading = false,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const buttonClasses = [
    'ui-button',
    `ui-button-${variant}`,
    loading ? 'ui-button-loading' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...props}
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
    >
      {loading ? <Spinner className="ui-button-spinner" size={16} /> : null}
      <span>{children}</span>
    </button>
  )
}
