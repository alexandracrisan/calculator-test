const allowedCharacters = '0123456789+-*/'
const operatorCharacters = '+-*/'

export function sanitizeExpressionInput(value: string) {
  return value
    .split('')
    .filter((character) => allowedCharacters.includes(character))
    .join('')
}

function hasOperator(expression: string) {
  return expression.split('').some((character) => operatorCharacters.includes(character))
}

function hasInvalidOperatorSequence(expression: string) {
  for (let index = 1; index < expression.length; index += 1) {
    const currentCharacter = expression[index]
    const previousCharacter = expression[index - 1]

    if (
      operatorCharacters.includes(currentCharacter) &&
      operatorCharacters.includes(previousCharacter)
    ) {
      return true
    }
  }

  return false
}

function splitExpression(expression: string) {
  const tokens: Array<number | string> = []
  let currentNumber = ''

  for (const character of expression) {
    if (operatorCharacters.includes(character)) {
      tokens.push(Number(currentNumber))
      tokens.push(character)
      currentNumber = ''
      continue
    }

    currentNumber += character
  }

  tokens.push(Number(currentNumber))

  return tokens
}

function applyOperator(left: number, operator: string, right: number) {
  if (operator === '+') {
    return left + right
  }

  if (operator === '-') {
    return left - right
  }

  if (operator === '*') {
    return left * right
  }

  return left / right
}

function calculateExpression(tokens: Array<number | string>) {
  const highPriorityTokens: Array<number | string> = [tokens[0]]

  for (let index = 1; index < tokens.length; index += 2) {
    const operator = tokens[index] as string
    const nextNumber = tokens[index + 1] as number

    if (operator === '*' || operator === '/') {
      const previousNumber = highPriorityTokens[highPriorityTokens.length - 1] as number
      highPriorityTokens[highPriorityTokens.length - 1] = applyOperator(
        previousNumber,
        operator,
        nextNumber,
      )
      continue
    }

    highPriorityTokens.push(operator)
    highPriorityTokens.push(nextNumber)
  }

  let result = highPriorityTokens[0] as number

  for (let index = 1; index < highPriorityTokens.length; index += 2) {
    const operator = highPriorityTokens[index] as string
    const nextNumber = highPriorityTokens[index + 1] as number
    result = applyOperator(result, operator, nextNumber)
  }

  return result
}

export function evaluateExpression(expression: string) {
  const sanitizedExpression = sanitizeExpressionInput(expression)

  if (!sanitizedExpression) {
    return { error: 'Enter an operation', result: '' }
  }

  if (!hasOperator(sanitizedExpression)) {
    return { error: 'Add an operator', result: '' }
  }

  if (
    operatorCharacters.includes(sanitizedExpression[0]) ||
    operatorCharacters.includes(sanitizedExpression[sanitizedExpression.length - 1])
  ) {
    return { error: 'Operation is incomplete', result: '' }
  }

  if (hasInvalidOperatorSequence(sanitizedExpression)) {
    return { error: 'Operation is invalid', result: '' }
  }

  const rawResult = calculateExpression(splitExpression(sanitizedExpression))

  if (!Number.isFinite(rawResult)) {
    return { error: 'Invalid calculation', result: '' }
  }

  const result = Number.isInteger(rawResult)
    ? String(rawResult)
    : Number(rawResult.toFixed(6)).toString()

  return { error: '', result }
}
