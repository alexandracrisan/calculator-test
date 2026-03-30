import { useState } from 'react'
import { Button, ConfirmationDialog, Keypad } from '@alexandracrisan/ui'
import type { KeypadItem } from '@alexandracrisan/ui'
import { useCalculator } from '../../hooks/useCalculator'
import { saveCalculation } from '../../services/storage/calculationHistoryStorage'
import { CalculatorDisplay } from './components/CalculatorDisplay/CalculatorDisplay'
import { SaveCalculationModal } from './components/SaveCalculationModal/SaveCalculationModal'
import './Calculator.scss'

const keypadItems: KeypadItem[] = [
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '/', value: '/', variant: 'primary' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '*', value: '*', variant: 'primary' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '+', value: '+', variant: 'primary' },
  { colSpan: 3, label: '0', value: '0' },
  { label: '=', value: '=', variant: 'primary' },
]

export function Calculator() {
  const {
    canClear,
    canSave,
    clearCalculator,
    error,
    evaluatedExpression,
    expression,
    handleExpressionChange,
    handleExpressionKeyDown,
    handleKeypadPress,
    result,
  } = useCalculator()
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false)
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false)

  const handleSaveCalculation = (label: string) => {
    saveCalculation({
      expression: evaluatedExpression,
      label,
      result,
    })
    setIsSaveModalOpen(false)
  }

  return (
    <section className="calculator">
      <article className="calculator-card">
        <CalculatorDisplay
          error={error}
          expression={expression}
          result={result}
          onChange={handleExpressionChange}
          onKeyDown={handleExpressionKeyDown}
        />
        <Keypad items={keypadItems} onKeyPress={handleKeypadPress} />
      </article>

      <div className="calculator-actions">
        <Button className="calculator-action-button" disabled={!canSave} onClick={() => setIsSaveModalOpen(true)}>
          Save
        </Button>
        <Button
          className="calculator-action-button"
          disabled={!canClear}
          variant="secondary"
          onClick={() => setIsClearDialogOpen(true)}
        >
          Clear
        </Button>
      </div>

      <SaveCalculationModal
        expression={evaluatedExpression}
        open={isSaveModalOpen}
        result={result}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSaveCalculation}
      />

      <ConfirmationDialog
        confirmLabel="Clear"
        message="This will remove the current operation from the calculator."
        open={isClearDialogOpen}
        title="Clear calculator"
        onCancel={() => setIsClearDialogOpen(false)}
        onConfirm={() => {
          clearCalculator()
          setIsClearDialogOpen(false)
        }}
      />
    </section>
  )
}
