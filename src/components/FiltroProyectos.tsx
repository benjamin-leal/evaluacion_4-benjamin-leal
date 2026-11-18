import type { FiltroProyecto } from '../types'

const opciones: FiltroProyecto[] = ['Todos', 'Frontend', 'Backend']

interface Props {
  activo: FiltroProyecto
  onCambiar: (filtro: FiltroProyecto) => void
}

export function FiltroProyectos({ activo, onCambiar }: Props) {
  return (
    <div className="filtro" role="group" aria-label="Filtrar trabajos por tipo">
      {opciones.map((opcion) => (
        <button
          key={opcion}
          type="button"
          className="filtro__boton"
          aria-pressed={activo === opcion}
          onClick={() => onCambiar(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  )
}
