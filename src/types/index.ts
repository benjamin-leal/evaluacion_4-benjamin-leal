

export type Tono = 'violeta' | 'verde' | 'ambar'
export type TipoProyecto = 'Frontend' | 'Backend'
export type FiltroProyecto = 'Todos' | TipoProyecto

export interface Perfil {
  nombre: string
  carrera: string
  universidad: string
  lema: string
  sobreMi: string
  correo: string
  github: string
  githubUrl: string
}

export interface DatoRapido {
  etiqueta: string
  valor: string
  tono: Tono
}

export interface GrupoTecnologias {
  titulo: string
  tono: Tono
  items: string[]
}

export interface Proyecto {
  id: string
  tipo: TipoProyecto
  titulo: string
  descripcion: string
  imagen: string
  alt: string
  tecnologias: string[]
  repoUrl: string
}

export interface EnlaceMenu {
  to: string
  texto: string
  destacado?: boolean
}

// Almacenamiento de estados de Peticion 
export type EstadoPeticion<T> =
  | { estado: 'cargando' }
  | { estado: 'exito'; datos: T }
  | { estado: 'error'; mensaje: string }


export interface RepoGithubDTO {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
}


export interface RepoGithub {
  id: number
  nombre: string
  descripcion: string
  url: string
  lenguaje: string
  estrellas: number
  actualizado: string
}

export interface DatosFormulario {
  nombre: string
  correo: string
  mensaje: string
}

export type ErroresFormulario = Partial<Record<keyof DatosFormulario, string>>
