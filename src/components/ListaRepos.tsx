import { perfil } from '../data/perfil'
import { useReposGithub } from '../hooks/useReposGithub'

const formatoFecha = new Intl.DateTimeFormat('es-CL', { dateStyle: 'medium' })


export function ListaRepos() {
  const { estado, reintentar } = useReposGithub(perfil.github)

  return (
    <section className="repos" aria-labelledby="titulo-repos">
      <h3 id="titulo-repos">Mis repositorios en GitHub</h3>

      {estado.estado === 'cargando' && (
        <p role="status" className="repos__estado">
          Cargando repositorios…
        </p>
      )}

      {estado.estado === 'error' && (
        <div role="alert" className="repos__error">
          <p>{estado.mensaje}</p>
          <button type="button" className="boton boton--principal" onClick={reintentar}>
            Reintentar
          </button>
        </div>
      )}

      {estado.estado === 'exito' &&
        (estado.datos.length === 0 ? (
          <p>Todavía no hay repositorios públicos.</p>
        ) : (
          <ul className="repos__lista">
            {estado.datos.map((repo) => (
              <li key={repo.id} className="repo">
                <h4>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.nombre}
                  </a>
                </h4>
                <p>{repo.descripcion}</p>
                <p className="repo__meta">
                  {repo.lenguaje} · ★ {repo.estrellas} · Actualizado {formatoFecha.format(new Date(repo.actualizado))}
                </p>
              </li>
            ))}
          </ul>
        ))}
    </section>
  )
}
