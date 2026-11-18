# Portafolio web (React + TypeScript) — Benjamin Leal

Migración del portafolio de la Evaluación 2 (HTML + CSS) a **React 19 + TypeScript + React Router**, para la Evaluación 4 (PIF) de Desarrollo de Frontend (ICINF1107), UC Temuco.

- Portafolio original (E2): https://benjamin-leal.github.io/portafolioweb/
- Captura del original: [`docs/captura-e2.png`](docs/captura-e2.png)

## Instalación y ejecución

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev        
npm run build      
npm run preview    
```

## Tecnologías

React 19 · TypeScript (modo `strict`, sin `any`) · React Router (`HashRouter`) · Vite · CSS3 (el mismo de la E2 + modo oscuro).

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Inicio (portada) |
| `/sobre-mi` | Sobre mí, datos rápidos y tecnologías |
| `/trabajos` | Trabajos con filtro + repositorios de GitHub (API) |
| `/contacto` | Formulario con validación |
| `*` | Página 404 con enlace al inicio |

Se usa `HashRouter` (`#/trabajos`) porque GitHub Pages no sabe redirigir rutas de una SPA.

## Estructura

```
src/
├── assets/       imágenes
├── components/   Cabecera, Pie, Hero, SobreMi, TarjetaProyecto, FormularioContacto, ListaRepos...
├── context/      ThemeContext (modo oscuro)
├── data/         perfil.ts y proyectos.ts (el contenido vive aquí, no en el JSX)
├── hooks/        useReposGithub, usePageTitle
├── pages/        una página por ruta
├── services/     github.ts (fetch a la API)
├── styles/       style.css
└── types/        interfaces y tipos compartidos
```

## API usada: GitHub REST

- **Endpoint:** `GET https://api.github.com/users/benjamin-leal/repos?sort=updated&per_page=12`
- **Sin clave**, con CORS habilitado. Límite: 60 peticiones/hora por IP.
- **Campos usados** (`RepoGithubDTO` en `src/types`): `id`, `name`, `description`, `html_url`, `language`, `stargazers_count`, `updated_at`, `fork`.
- **Por qué este endpoint:** es un portafolio de proyectos; mostrar mis repositorios reales mantiene la sección al día sin editar código.
- **Estados:** cargando (`role="status"`), éxito y error con mensaje claro y botón *Reintentar* (`role="alert"`).
- **Condiciones de carrera:** `AbortController` cancela la petición al desmontar el componente.
- **Peticiones repetidas:** caché en memoria por usuario; al volver a `/trabajos` no se pide de nuevo.

## Estado

- `useState` local: filtro de trabajos, campos y errores del formulario, estado de la petición.
- `useEffect`: la petición a la API y el aplicar el tema al `<html>`.
- **Context API:** `ThemeContext`. El tema lo lee el botón del encabezado y lo aplica toda la app; es estado transversal.
- Valores derivados (proyectos visibles) se calculan en el render, no se duplican en otro estado.

## Accesibilidad y responsivo

HTML semántico, enlace «Saltar al contenido», `label` asociado a cada campo, errores con `aria-invalid`/`aria-describedby`, foco visible, `NavLink` con sección activa, foco al contenido al cambiar de ruta, `<title>` por página. Diseño mobile-first con los mismos puntos de quiebre de la E2 (768 px y 1100 px).

**Revisión Lighthouse** (Chrome, versión compilada con `npm run build`, modo móvil):

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
| --- | --- | --- | --- | --- |
| Inicio | 89 | 100 | 96 | 83 |
| Sobre mí | 100 | 100 | 96 | 82 |
| Trabajos | 95 | 100 | 96 | 83 |
| Contacto | 100 | 100 | 96 | 82 |

**Qué encontré:** la accesibilidad salió en 100 en todas las páginas. En SEO faltaba una `meta description`, que se puede agregar en `index.html`. El error de robots.txt aparece solo al probar con `vite preview`. En buenas prácticas hay un error de consola menor.

## Documentos del proyecto

[`INVENTARIO.md`](INVENTARIO.md) · [`uso_ia.md`](uso_ia.md) 
