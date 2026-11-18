import { NavLink } from 'react-router-dom'
import { menu, perfil } from '../data/perfil'

export function Pie() {
  return (
    <footer className="pie">
      <nav aria-label="Enlaces del pie de página">
        <ul className="pie__menu">
          {menu.map((enlace) => (
            <li key={enlace.to}>
              <NavLink to={enlace.to} end={enlace.to === '/'}>
                {enlace.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <p className="pie__derechos">
        © {new Date().getFullYear()} {perfil.nombre}. {perfil.carrera}, UC Temuco.
      </p>
    </footer>
  )
}
