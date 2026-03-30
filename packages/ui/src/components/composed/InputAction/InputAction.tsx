import { Button } from '../../primitives/Button/Button'
import { Input } from '../../primitives/Input/Input'
import type { InputProps } from '../../primitives/Input/Input'
import './InputAction.scss'

export type InputActionProps = Omit<InputProps, 'className' | 'inputClassName' | 'error'> & {
  actionLabel: string
  buttonClassName?: string
  buttonDisabled?: boolean
  buttonLoading?: boolean
  className?: string
  error?: string
  inputClassName?: string
  onActionClick: () => void
}

export function InputAction({
  actionLabel,
  buttonClassName,
  buttonDisabled,
  buttonLoading = false,
  className,
  error,
  inputClassName,
  onActionClick,
  ...inputProps
}: InputActionProps) {
  const classes = ['ui-input-action', className ?? ''].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className="ui-input-action-control">
        <Input {...inputProps} error={error} inputClassName={inputClassName} />
        <Button
          className={buttonClassName}
          disabled={buttonDisabled}
          loading={buttonLoading}
          onClick={onActionClick}
        >
          {actionLabel}
        </Button>
      </div>
    </div>
  )
}
