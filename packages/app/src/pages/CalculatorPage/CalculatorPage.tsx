import { useState } from 'react'
import { Input } from '@alexandracrisan/ui'
import './CalculatorPage.scss'

export function CalculatorPage() {
  const [expression, setExpression] = useState('12 + 7')
  const [label, setLabel] = useState('')

  return (
    <section className="calculator-page">
      <article className="calculator-card">
        <h2 className="calculator-title">Calculator</h2>
        <output className="calculator-display" aria-label="Current expression">
          {expression}
        </output>
      </article>
    </section>
  )
}
