import type { ReactNode } from 'react'
import { Button } from '../../primitives/Button/Button'
import { Modal } from '../../primitives/Modal/Modal'

export type ConfirmationDialogProps = {
  cancelLabel?: string
  confirmLabel?: string
  loading?: boolean
  message: ReactNode
  onCancel: () => void
  onConfirm: () => void
  open: boolean
  title: ReactNode
}

export function ConfirmationDialog({
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  loading = false,
  message,
  onCancel,
  onConfirm,
  open,
  title,
}: ConfirmationDialogProps) {
  return (
    <Modal
      open={open}
      onClose={onCancel}
      title={title}
      body={message}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button loading={loading} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </>
      }
    />
  )
}
