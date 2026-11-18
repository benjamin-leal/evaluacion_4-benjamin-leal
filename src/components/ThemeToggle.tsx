import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { tema, alternarTema } = useTheme()
  const oscuro = tema === 'oscuro'
  return (
    <button type="button" className="tema-boton" onClick={alternarTema}>
      <span aria-hidden="true">{oscuro ? '' : ''}</span> {oscuro ? 'Modo claro' : 'Modo oscuro'}
    </button>
  )
}
