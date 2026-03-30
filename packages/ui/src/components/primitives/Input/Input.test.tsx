import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('renders the error message', () => {
    render(<Input error="Label is required" />)

    expect(screen.getByText('Label is required')).toBeInTheDocument()
  })
})
