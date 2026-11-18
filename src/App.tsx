import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Contacto } from './pages/Contacto'
import { Inicio } from './pages/Inicio'
import { NoEncontrada } from './pages/NoEncontrada'
import { SobreMiPagina } from './pages/SobreMiPagina'
import { Trabajos } from './pages/Trabajos'

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="sobre-mi" element={<SobreMiPagina />} />
        <Route path="trabajos" element={<Trabajos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
