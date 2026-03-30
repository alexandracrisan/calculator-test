export type SavedCalculation = {
  expression: string
  id: string
  label: string
  result: string
}

export type SaveCalculationPayload = {
  expression: string
  label: string
  result: string
}
