import { Button } from '../../primitives/Button/Button'
import './Keypad.scss'

export type KeypadItem = {
  className?: string
  colSpan?: number
  disabled?: boolean
  label: string
  rowSpan?: number
  value: string
  variant?: 'primary' | 'secondary'
}

export type KeypadProps = {
  className?: string
  columns?: number
  items: KeypadItem[]
  onKeyPress: (value: string) => void
}

export function Keypad({
  className,
  columns = 4,
  items,
  onKeyPress,
}: KeypadProps) {
  const classes = ['ui-keypad', className ?? ''].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item) => (
        <Button
          key={`${item.value}-${item.label}`}
          className={['ui-keypad-button', item.className ?? ''].filter(Boolean).join(' ')}
          disabled={item.disabled}
          style={{
            gridColumn: item.colSpan ? `span ${item.colSpan}` : undefined,
            gridRow: item.rowSpan ? `span ${item.rowSpan}` : undefined,
          }}
          variant={item.variant ?? 'secondary'}
          onClick={() => onKeyPress(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}
