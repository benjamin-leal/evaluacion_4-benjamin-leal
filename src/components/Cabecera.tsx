import { Link, NavLink } from 'react-router-dom'
import { menu } from '../data/perfil'
import { ThemeToggle } from './ThemeToggle'

export function Cabecera() {
  return (
    <header className="cabecera">
      <Link className="cabecera__marca" to="/">
        Portafolio Web
      </Link>

      <nav aria-label="Navegación principal" className="cabecera__nav">
        <ul className="menu">
          {menu.map((enlace) => (
            <li key={enlace.to}>
              <NavLink
                to={enlace.to}
                end={enlace.to === '/'}
                className={enlace.destacado ? 'menu__destacado' : undefined}
              >
                {enlace.texto}
              </NavLink>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
