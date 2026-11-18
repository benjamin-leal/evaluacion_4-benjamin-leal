import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export function NoEncontrada() {
  usePageTitle('Página no encontrada')
  return (
    <section className="seccion" aria-labelledby="titulo-404">
      <h2 id="titulo-404">Página no encontrada</h2>
      <p>La dirección que buscas no existe en este portafolio.</p>
      <p>
        <Link className="boton boton--principal" to="/">
          Volver al inicio
        </Link>
      </p>
    </section>
  )
}
