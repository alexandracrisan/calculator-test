import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

export type ModalProps = {
  body?: ReactNode
  className?: string
  footer?: ReactNode
  onClose: () => void
  open: boolean
  title?: ReactNode
}

export function Modal({ body, className, footer, onClose, open, title }: ModalProps) {
  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, open])

  if (!open) {
    return null
  }

  const modalClasses = ['ui-modal', className ?? ''].filter(Boolean).join(' ')

  return createPortal(
    <div className="ui-modal-overlay" onClick={onClose}>
      <div
        className={modalClasses}
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        {title ? <div className="ui-modal-title">{title}</div> : null}
        {body ? <div className="ui-modal-body">{body}</div> : null}
        {footer ? <div className="ui-modal-footer">{footer}</div> : null}
      </div>
    </div>,
    document.body,
  )
}
