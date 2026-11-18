import { SobreMi } from '../components/SobreMi'
import { usePageTitle } from '../hooks/usePageTitle'

export function SobreMiPagina() {
  usePageTitle('Sobre mí')
  return <SobreMi />
}
