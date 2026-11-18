import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import type { Proyecto } from '../types'
import { perfil } from './perfil'


export const proyectos: Proyecto[] = [
  {
    id: 'api-students-pets',
    tipo: 'Backend',
    titulo: 'API CRUD de Students y Pets',
    descripcion:
      'Proyecto en equipo de cuatro personas. Una API hecha con FastAPI para crear, consultar, actualizar y borrar estudiantes y mascotas.',
    imagen: img1,
    alt: 'Tres filas que representan los registros de una API',
    tecnologias: ['Python', 'FastAPI', 'Git'],
    repoUrl: perfil.githubUrl,
  },
  {
    id: 'reservas-salas',
    tipo: 'Backend',
    titulo: 'Sistema de Reservas de Salas de Estudio',
    descripcion:
      'Proyecto en equipo de cuatro personas. Una API con salas, reservas, estudiantes e incidencias para ordenar el uso de los espacios de estudio.',
    imagen: img2,
    alt: 'Imagen que muestra un codigo',
    tecnologias: ['Python', 'FastAPI', 'Trabajo en equipo'],
    repoUrl: perfil.githubUrl,
  },
  {
    id: 'mi-primera-web',
    tipo: 'Frontend',
    titulo: 'Mi primera web',
    descripcion: 'Mi primer sitio en HTML y CSS: una página para conocer animales exóticos.',
    imagen: img3,
    alt: 'Imagen de una pagina web de animales exoticos',
    tecnologias: ['HTML5', 'CSS3'],
    repoUrl: perfil.githubUrl,
  },
]
