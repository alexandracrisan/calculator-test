import { useEffect, useState } from 'react'
import { Button, FormField, InputAction, Modal } from '@alexandracrisan/ui'
import './SaveCalculationModal.scss'

type SaveCalculationModalProps = {
  expression: string
  onClose: () => void
  onSave: (label: string) => void
  open: boolean
  result: string
}

export function SaveCalculationModal({
  expression,
  onClose,
  onSave,
  open,
  result,
}: SaveCalculationModalProps) {
  const [label, setLabel] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) {
      setLabel('')
      setError('')
    }
  }, [open])

  const handleSave = () => {
    const nextError = label.trim() ? '' : 'Label is required'

    if (nextError) {
      setError(nextError)
      return
    }

    onSave(label.trim())
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Save operation"
      body={
        <div className="save-calculation-modal">
          <p className="save-calculation-modal-text">
            {expression} = {result}
          </p>
          <FormField label="Operation label">
            <InputAction
              actionLabel="Confirm"
              error={error}
              placeholder="Add a label"
              value={label}
              onActionClick={handleSave}
              onChange={(event) => {
                setLabel(event.target.value)
                if (error) {
                  setError('')
                }
              }}
            />
          </FormField>
        </div>
      }
      footer={
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      }
    />
  )
}
