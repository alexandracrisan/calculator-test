import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Keypad } from './Keypad'

describe('Keypad', () => {
  it('emits pressed values', () => {
    const onKeyPress = vi.fn()

    render(
      <Keypad
        items={[
          { label: '1', value: '1' },
          { label: '+', value: '+' },
        ]}
        onKeyPress={onKeyPress}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: '1' }))
    fireEvent.click(screen.getByRole('button', { name: '+' }))

    expect(onKeyPress).toHaveBeenNthCalledWith(1, '1')
    expect(onKeyPress).toHaveBeenNthCalledWith(2, '+')
  })
})
