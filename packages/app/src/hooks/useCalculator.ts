import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import { evaluateExpression, sanitizeExpressionInput } from '../utils/calculation'

export function useCalculator() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const [evaluatedExpression, setEvaluatedExpression] = useState('')

  const handleExpressionChange = (value: string) => {
    setExpression(sanitizeExpressionInput(value))
    setResult('')
    setError('')
    setEvaluatedExpression('')
  }

  const evaluateCurrentExpression = () => {
    const evaluation = evaluateExpression(expression)

    if (evaluation.error) {
      setError(evaluation.error)
      setResult('')
      return false
    }

    setError('')
    setResult(evaluation.result)
    setEvaluatedExpression(expression)
    return true
  }

  const handleExpressionKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault()
      evaluateCurrentExpression()
    }
  }

  const handleKeypadPress = (value: string) => {
    if (value === '=') {
      evaluateCurrentExpression()
      return
    }

    setExpression((currentExpression) => sanitizeExpressionInput(`${currentExpression}${value}`))
    setResult('')
    setError('')
    setEvaluatedExpression('')
  }

  const clearCalculator = () => {
    setExpression('')
    setResult('')
    setError('')
    setEvaluatedExpression('')
  }

  return {
    canClear: Boolean(expression || result),
    canSave: Boolean(result && evaluatedExpression),
    clearCalculator,
    error,
    evaluatedExpression,
    expression,
    handleExpressionChange,
    handleExpressionKeyDown,
    handleKeypadPress,
    result,
  }
}
