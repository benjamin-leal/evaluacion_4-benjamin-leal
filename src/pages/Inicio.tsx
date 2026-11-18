import { Hero } from '../components/Hero'
import { usePageTitle } from '../hooks/usePageTitle'

export function Inicio() {
  usePageTitle('Inicio')
  return <Hero />
}
