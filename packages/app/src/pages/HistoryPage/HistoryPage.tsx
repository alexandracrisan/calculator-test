import { Spinner } from '@alexandracrisan/ui'
import { HistoryList } from '../../components/HistoryList/HistoryList'
import { useHistory } from '../../hooks/useHistory'
import './HistoryPage.scss'

export function HistoryPage() {
  const { isLoading, items } = useHistory()

  return (
    <article className="history-card">
      <h2 className="history-title">Saved Results</h2>
      {isLoading ? (
        <div className="history-loading">
          <Spinner />
        </div>
      ) : items.length ? (
        <HistoryList items={items} />
      ) : (
        <p className="history-empty">No saved calculations yet.</p>
      )}
    </article>
  )
}
