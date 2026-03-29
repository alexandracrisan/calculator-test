import { NavLink } from 'react-router-dom'
import type { NavLinkRenderProps } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import './App.scss'

export default function App() {
  const getNavLinkClassName = ({ isActive }: NavLinkRenderProps) =>
    isActive ? 'app-nav-link app-nav-link-active' : 'app-nav-link'

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Calculator App</h1>

        <nav className="app-nav" aria-label="Primary">
          <NavLink to="/calculator" className={getNavLinkClassName}>
            Calculator
          </NavLink>
          <NavLink to="/history" className={getNavLinkClassName}>
            Saved Results
          </NavLink>
        </nav>
      </header>

      <main>
        <AppRouter />
      </main>
    </div>
  )
}
