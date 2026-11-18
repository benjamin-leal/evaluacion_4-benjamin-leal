import { FormularioContacto } from '../components/FormularioContacto'
import { perfil } from '../data/perfil'
import { usePageTitle } from '../hooks/usePageTitle'

export function Contacto() {
  usePageTitle('Contacto')
  return (
    <section className="seccion contacto" aria-labelledby="titulo-contacto">
      <h2 id="titulo-contacto">Contacto</h2>

      <p>¿Quieres conversar sobre un proyecto o una práctica? Escríbeme y te respondo.</p>

      <address className="contacto__datos">
        <p>
          <strong>Correo</strong> {perfil.correo}
        </p>
        <p>
          <strong>GitHub</strong> {perfil.github}
        </p>
        <p>
          <strong>Estudios</strong> {perfil.universidad}
        </p>
      </address>

      <FormularioContacto />
    </section>
  )
}
