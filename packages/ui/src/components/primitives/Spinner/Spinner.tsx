import './Spinner.scss'

export type SpinnerProps = {
  className?: string
  size?: number
}

export function Spinner({ className, size = 20 }: SpinnerProps) {
  const spinnerClasses = ['ui-spinner', className ?? ''].filter(Boolean).join(' ')

  return (
    <span
      className={spinnerClasses}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    />
  )
}
