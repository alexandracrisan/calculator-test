import { useEffect, useState } from 'react'
import { getSavedCalculations } from '../services/storage/calculationHistoryStorage'
import type { SavedCalculation } from '../types/calculation'

export function useHistory() {
  const [items, setItems] = useState<SavedCalculation[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    // Small delay as a real API loading state while still using localStorage
    const timeoutId = window.setTimeout(() => {
      setItems(getSavedCalculations())
      setIsLoading(false)
    }, 450)

    return () => window.clearTimeout(timeoutId)
  }, [])

  return { isLoading, items }
}
