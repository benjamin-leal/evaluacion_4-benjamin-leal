import type { DatoRapido, EnlaceMenu, GrupoTecnologias, Perfil } from '../types'

export const perfil: Perfil = {
  nombre: 'Benjamin Leal',
  carrera: 'Ingeniería Civil en Informática',
  universidad: 'Universidad Católica de Temuco',
  lema: 'Estudiante de Ingeniería Civil en Informática en la Universidad Católica de Temuco. Estoy aprendiendo, probando cosas nuevas y armando mis primeros proyectos.',
  sobreMi:
    'Soy estudiante de primer año en la Universidad Católica de Temuco. Este semestre aprendí HTML y CSS, y trabajé en dos proyectos en equipo con Python. Este portafolio reúne lo que he construido.',
  correo: 'benjamin.leal2026@alu.uct.cl',
  github: 'benjamin-leal',
  githubUrl: 'https://github.com/benjamin-leal',
}

export const datosRapidos: DatoRapido[] = [
  { etiqueta: 'Carrera', valor: 'Ingeniería Civil en Informática, UC Temuco', tono: 'violeta' },
  { etiqueta: 'Intereses', valor: 'Desarrollo web y hardware de PC', tono: 'verde' },
  { etiqueta: 'Busco', valor: 'Practicar con proyectos', tono: 'ambar' },
]

export const tecnologias: GrupoTecnologias[] = [
  { titulo: 'Frontend', tono: 'violeta', items: ['HTML5', 'CSS3', 'React', 'TypeScript'] },
  { titulo: 'Backend', tono: 'verde', items: ['Python', 'FastAPI'] },
  { titulo: 'Herramientas', tono: 'ambar', items: ['Git', 'GitHub', 'Vite'] },
]

export const menu: EnlaceMenu[] = [
  { to: '/', texto: 'Inicio' },
  { to: '/sobre-mi', texto: 'Sobre mí' },
  { to: '/trabajos', texto: 'Trabajos' },
  { to: '/contacto', texto: 'Contacto', destacado: true },
]
