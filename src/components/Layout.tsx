import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Cabecera } from './Cabecera'
import { Pie } from './Pie'
import { SaltarAlContenido } from './SaltarAlContenido'

export function Layout() {
  const { pathname } = useLocation()
  const principal = useRef<HTMLElement>(null)
  const primera = useRef(true)

  
  useEffect(() => {
    window.scrollTo(0, 0)
    if (primera.current) {
      primera.current = false
      return
    }
    principal.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <SaltarAlContenido />
      <Cabecera />
      <main id="contenido" ref={principal} tabIndex={-1}>
        <Outlet />
      </main>
      <Pie />
    </>
  )
}
