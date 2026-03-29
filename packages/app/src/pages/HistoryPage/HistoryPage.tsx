import './HistoryPage.scss'

const mockEntries = [
  { id: 1, label: 'Taxi split', value: '42 / 3 = 14' },
  { id: 2, label: 'Groceries estimate', value: '18 + 27 = 45' },
  { id: 3, label: 'Discount check', value: '120 - 15 = 105' },
]

export function HistoryPage() {
  return (
    <section className="history-page">
      <article className="history-card">
        <h2 className="history-title">Saved Results</h2>

        <ul className="history-list">
          {mockEntries.map((entry) => (
            <li key={entry.id} className="history-item">
              <strong>{entry.label}</strong>
              <span>{entry.value}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
