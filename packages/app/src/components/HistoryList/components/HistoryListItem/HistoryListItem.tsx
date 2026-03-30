import type { SavedCalculation } from '../../../../types/calculation'
import './HistoryListItem.scss'

type HistoryListItemProps = {
  item: SavedCalculation
}

export function HistoryListItem({ item }: HistoryListItemProps) {
  return (
    <li className="history-list-item">
      <div className="history-list-item-content">
        <strong className="history-list-item-label">{item.label}</strong>
        <span className="history-list-item-expression">
          {item.expression} = {item.result}
        </span>
      </div>
    </li>
  )
}
