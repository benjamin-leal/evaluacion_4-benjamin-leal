import { Link } from 'react-router-dom'
import imgPerfil from '../assets/img5.jpg'
import { perfil } from '../data/perfil'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="titulo-inicio">
      <figure className="hero__figura">
        <img src={imgPerfil} alt="Imagen de perfil que muestra un pato" width={400} height={500} />
      </figure>

      <h1 id="titulo-inicio">Hola, soy {perfil.nombre}</h1>

      <p className="hero__lema">{perfil.lema}</p>

      <p className="hero__acciones">
        <Link className="boton boton--acento" to="/trabajos">
          Ver mis trabajos
        </Link>
        <Link className="boton boton--contorno" to="/contacto">
          Escríbeme
        </Link>
      </p>
    </section>
  )
}
