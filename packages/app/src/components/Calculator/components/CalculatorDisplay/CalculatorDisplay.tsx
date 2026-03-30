import { Input } from '@alexandracrisan/ui'
import type { KeyboardEventHandler } from 'react'
import './CalculatorDisplay.scss'

type CalculatorDisplayProps = {
  error?: string
  expression: string
  onChange: (value: string) => void
  onKeyDown: KeyboardEventHandler<HTMLInputElement>
  result?: string
}

export function CalculatorDisplay({
  error,
  expression,
  onChange,
  onKeyDown,
  result,
}: CalculatorDisplayProps) {
  return (
    <div className="calculator-display-panel">
      <Input
        error={error}
        inputClassName="calculator-display-input"
        placeholder="0"
        value={expression}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onKeyDown}
      />
      <p className="calculator-display-result">
        {result ? `= ${result}` : 'Use the keypad or your keyboard'}
      </p>
    </div>
  )
}
