import type { SaveCalculationPayload, SavedCalculation } from '../../types/calculation'

const CALCULATION_HISTORY_STORAGE_KEY = 'calculator-history'

export function getSavedCalculations() {
  const storedValue = window.localStorage.getItem(CALCULATION_HISTORY_STORAGE_KEY)

  if (!storedValue) {
    return []
  }

  try {
    return JSON.parse(storedValue) as SavedCalculation[]
  } catch {
    return []
  }
}

export function saveCalculation(payload: SaveCalculationPayload) {
  const savedCalculations = getSavedCalculations()
  const nextCalculation: SavedCalculation = {
    id: String(Date.now()),
    label: payload.label.trim(),
    expression: payload.expression,
    result: payload.result,
  }

  const nextCalculations = [...savedCalculations, nextCalculation]
  window.localStorage.setItem(
    CALCULATION_HISTORY_STORAGE_KEY,
    JSON.stringify(nextCalculations),
  )

  return nextCalculation
}
