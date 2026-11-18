import { datosRapidos, perfil, tecnologias } from '../data/perfil'
import { ListaEtiquetas } from './ListaEtiquetas'

export function SobreMi() {
  return (
    <section className="seccion sobre-mi" aria-labelledby="titulo-sobre-mi">
      <h2 id="titulo-sobre-mi">Sobre mí</h2>

      <p>{perfil.sobreMi}</p>

      <h3>Datos rápidos</h3>
      <ul className="datos">
        {datosRapidos.map((dato) => (
          <li key={dato.etiqueta} className={`datos__${dato.tono}`}>
            <strong>{dato.etiqueta}</strong> {dato.valor}
          </li>
        ))}
      </ul>

      <h3>Tecnologías que uso</h3>
      <ul className="grupos">
        {tecnologias.map((grupo) => (
          <li key={grupo.titulo}>
            <h4>{grupo.titulo}</h4>
            <ListaEtiquetas items={grupo.items} tono={grupo.tono} />
          </li>
        ))}
      </ul>
    </section>
  )
}
