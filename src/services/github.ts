import type { RepoGithub, RepoGithubDTO } from '../types'

const API = 'https://api.github.com' 
// Llamada a la API de GITHUBj

function mapear(dto: RepoGithubDTO): RepoGithub {
  return {
    id: dto.id,
    nombre: dto.name,
    descripcion: dto.description ?? 'Sin descripción.',
    url: dto.html_url,
    lenguaje: dto.language ?? 'Sin lenguaje',
    estrellas: dto.stargazers_count,
    actualizado: dto.updated_at,
  }
}



export async function obtenerRepos(usuario: string, signal: AbortSignal): Promise<RepoGithub[]> {
  const respuesta = await fetch(
    `${API}/users/${encodeURIComponent(usuario)}/repos?sort=updated&per_page=12`,
    { signal, headers: { Accept: 'application/vnd.github+json' } },
  )

  if (respuesta.status === 404) throw new Error('No se encontró el usuario de GitHub.')
  if (respuesta.status === 403 || respuesta.status === 429) {
    throw new Error('GitHub limitó las consultas por un rato. Intenta de nuevo más tarde.')
  }
  if (!respuesta.ok) throw new Error(`GitHub respondió con el código ${respuesta.status}.`)

  const datos = (await respuesta.json()) as RepoGithubDTO[]
  return datos.filter((r) => !r.fork).map(mapear)
}
