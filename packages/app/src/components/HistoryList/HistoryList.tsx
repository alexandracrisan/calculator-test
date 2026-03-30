import type { SavedCalculation } from '../../types/calculation'
import { HistoryListItem } from './components/HistoryListItem/HistoryListItem'
import './HistoryList.scss'

type HistoryListProps = {
  items: SavedCalculation[]
}

export function HistoryList({ items }: HistoryListProps) {
  return (
    <ul className="history-list">
      {items.map((item) => (
        <HistoryListItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
