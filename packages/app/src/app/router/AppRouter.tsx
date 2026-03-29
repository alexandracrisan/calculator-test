import { Navigate, Route, Routes } from 'react-router-dom'
import { CalculatorPage } from '../../pages/CalculatorPage/CalculatorPage'
import { HistoryPage } from '../../pages/HistoryPage/HistoryPage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/calculator" replace />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  )
}
