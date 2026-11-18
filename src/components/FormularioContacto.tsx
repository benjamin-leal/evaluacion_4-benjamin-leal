import { useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { DatosFormulario, ErroresFormulario } from '../types'

const vacio: DatosFormulario = { nombre: '', correo: '', mensaje: '' }

function validar(d: DatosFormulario): ErroresFormulario {
  const errores: ErroresFormulario = {}
  if (!d.nombre.trim()) errores.nombre = 'Escribe tu nombre.'
  if (!d.correo.trim()) errores.correo = 'Escribe tu correo electrónico.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.correo)) errores.correo = 'El correo no tiene un formato válido.'
  if (d.mensaje.trim().length < 10) errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
  return errores
}

export function FormularioContacto() {
  const [datos, setDatos] = useState<DatosFormulario>(vacio)
  const [errores, setErrores] = useState<ErroresFormulario>({})
  const [enviado, setEnviado] = useState(false)
  const confirmacion = useRef<HTMLElement>(null)

  function alCambiar(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setDatos((previo) => ({ ...previo, [name]: value }))
  }

  function alEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const nuevos = validar(datos)
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) {
      // Lleva el foco al primer campo con error.
      const primero = (['nombre', 'correo', 'mensaje'] as const).find((k) => nuevos[k])
      if (primero) document.getElementById(`campo-${primero}`)?.focus()
      return
    }
    setEnviado(true)

    requestAnimationFrame(() => confirmacion.current?.focus())
  }

  function escribirOtro() {
    setDatos(vacio)
    setErrores({})
    setEnviado(false)
  }

  if (enviado) {
    return (
      <article className="confirmacion" tabIndex={-1} ref={confirmacion}>
        <h3>Mensaje enviado</h3>
        <p>Gracias por escribir, {datos.nombre}. Esta es una demostración: el mensaje no se envió a ningún lugar.</p>
        <p>
          <button type="button" className="enlace-boton" onClick={escribirOtro}>
            Escribir otro mensaje
          </button>
        </p>
      </article>
    )
  }

  return (
    <form className="formulario" onSubmit={alEnviar} noValidate>
      <Campo id="nombre" etiqueta="Nombre" error={errores.nombre}>
        <input
          id="campo-nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          value={datos.nombre}
          onChange={alCambiar}
          aria-invalid={errores.nombre ? true : undefined}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
        />
      </Campo>

      <Campo id="correo" etiqueta="Correo electrónico" error={errores.correo}>
        <input
          id="campo-correo"
          name="correo"
          type="email"
          autoComplete="email"
          value={datos.correo}
          onChange={alCambiar}
          aria-invalid={errores.correo ? true : undefined}
          aria-describedby={errores.correo ? 'error-correo' : undefined}
        />
      </Campo>

      <Campo id="mensaje" etiqueta="Mensaje" error={errores.mensaje}>
        <textarea
          id="campo-mensaje"
          name="mensaje"
          rows={5}
          value={datos.mensaje}
          onChange={alCambiar}
          aria-invalid={errores.mensaje ? true : undefined}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
        />
      </Campo>

      <p>
        <button className="boton boton--principal" type="submit">
          Enviar mensaje
        </button>
      </p>
    </form>
  )
}

interface CampoProps {
  id: keyof DatosFormulario
  etiqueta: string
  error?: string
  children: React.ReactNode
}


function Campo({ id, etiqueta, error, children }: CampoProps) {
  return (
    <p className="campo">
      <label htmlFor={`campo-${id}`}>{etiqueta}</label>
      {children}
      {error && (
        <span id={`error-${id}`} className="campo__error" role="alert">
          {error}
        </span>
      )}
    </p>
  )
}
