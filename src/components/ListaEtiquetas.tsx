import type { Tono } from '../types'

interface Props {
  items: string[]
  tono: Tono
}

export function ListaEtiquetas({ items, tono }: Props) {
  return (
    <ul className={`etiquetas etiquetas--${tono}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
