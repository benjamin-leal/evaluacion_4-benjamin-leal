import type { Proyecto } from '../types'
import { ListaEtiquetas } from './ListaEtiquetas'

interface Props {
  proyecto: Proyecto
}

export function TarjetaProyecto({ proyecto }: Props) {
  const tono = proyecto.tipo === 'Backend' ? 'verde' : 'violeta'
  return (
    <article className={`tarjeta tarjeta--${tono}`}>
      <figure className="tarjeta__figura">
        <img src={proyecto.imagen} alt={proyecto.alt} width={400} height={220} />
      </figure>
      <p className="tarjeta__tipo">{proyecto.tipo}</p>
      <h3>{proyecto.titulo}</h3>
      <p className="tarjeta__texto">{proyecto.descripcion}</p>
      <ListaEtiquetas items={proyecto.tecnologias} tono={tono} />
      <a
        className="boton boton--tono tarjeta__enlace"
        href={proyecto.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver repositorio<span className="solo-lectores"> de {proyecto.titulo} (se abre en una pestaña nueva)</span>
      </a>
    </article>
  )
}
