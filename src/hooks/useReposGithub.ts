import { useCallback, useEffect, useState } from 'react'
import { obtenerRepos } from '../services/github'
import type { EstadoPeticion, RepoGithub } from '../types'


const cache = new Map<string, RepoGithub[]>()

export function useReposGithub(usuario: string) {
  const [estado, setEstado] = useState<EstadoPeticion<RepoGithub[]>>(() => {
    const guardado = cache.get(usuario)
    return guardado ? { estado: 'exito', datos: guardado } : { estado: 'cargando' }
  })
  
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    const guardado = cache.get(usuario)
    if (guardado && intento === 0) return

    const controlador = new AbortController()
    setEstado({ estado: 'cargando' })

    obtenerRepos(usuario, controlador.signal)
      .then((datos) => {
        cache.set(usuario, datos)
        setEstado({ estado: 'exito', datos })
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return
        const mensaje =
          error instanceof Error && error.message !== 'Failed to fetch'
            ? error.message
            : 'No pudimos conectar con GitHub. Revisa tu conexión.'
        setEstado({ estado: 'error', mensaje })
      })

    
    return () => controlador.abort()
  }, [usuario, intento])

  const reintentar = useCallback(() => {
    cache.delete(usuario)
    setIntento((n) => n + 1)
  }, [usuario])

  return { estado, reintentar }
}
