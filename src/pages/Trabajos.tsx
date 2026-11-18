import { useState } from 'react'
import { FiltroProyectos } from '../components/FiltroProyectos'
import { ListaRepos } from '../components/ListaRepos'
import { TarjetaProyecto } from '../components/TarjetaProyecto'
import { proyectos } from '../data/proyectos'
import { usePageTitle } from '../hooks/usePageTitle'
import type { FiltroProyecto } from '../types'

export function Trabajos() {
  usePageTitle('Trabajos')
  
  const [filtro, setFiltro] = useState<FiltroProyecto>('Todos')
  
  const visibles = filtro === 'Todos' ? proyectos : proyectos.filter((p) => p.tipo === filtro)

  return (
    <section className="seccion seccion--superficie" aria-labelledby="titulo-trabajos">
      <h2 id="titulo-trabajos">Trabajos del semestre</h2>
      <p>Lo que he construido este semestre.</p>

      <FiltroProyectos activo={filtro} onCambiar={setFiltro} />
      <p role="status" className="solo-lectores">
        Mostrando {visibles.length} {visibles.length === 1 ? 'trabajo' : 'trabajos'}
      </p>

      <ul className="tarjetas">
        {visibles.map((proyecto) => (
          <li key={proyecto.id}>
            <TarjetaProyecto proyecto={proyecto} />
          </li>
        ))}
      </ul>

      <ListaRepos />
    </section>
  )
}
