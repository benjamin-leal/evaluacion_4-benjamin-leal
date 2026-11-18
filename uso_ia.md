# Declaración de uso de IA

## 1. Herramientas utilizadas
- **Claude (Anthropic)**, como asistente de programación y de estudio.
- **Git y GitHub**, para el control de versiones.
- **Vite**, para crear y compilar el proyecto.

## 2. Para qué se usaron
Usé Claude para cuatro cosas:
- **Plantear la base del proyecto:** estructura de carpetas, configuración de Vite y TypeScript, y la migración del HTML y CSS de mi portafolio de la E2 a componentes de React.
- **Generar código:** componentes, páginas, rutas con React Router, el hook que consume la API de GitHub, el contexto del modo oscuro y la validación del formulario.
- **Escribir borradores de documentación:** README, INVENTARIO, guía de Git y este archivo.

La idea, el diseño y el contenido (textos, imágenes, proyectos, paleta) son de mi portafolio de la E2. Claude no inventó el diseño; lo trasladó a React.

## 3. Prompts principales
- Le pedí ayuda para clonar mi portafolio de HTML y CSS usando TypeScript, React, React DOM y rutas, siguiendo la rúbrica de la E4.
- Le pregunté por qué se habían agregado cosas que yo no había pedido.
- Le pedí que me explicara el flujo entre ciertas carpetas.

## 4. Qué se recibió
Un proyecto Vite funcional con:
- Componentes por sección, tipos en `src/types` y datos en `src/data`.
- Cinco rutas con React Router (incluida la 404).
- Un hook `useReposGithub` con estados de carga, éxito y error, caché y `AbortController`.
- Un `ThemeContext` para el modo oscuro.
- Un formulario con validación, un filtro de trabajos y el CSS de la E2 adaptado.
- Borradores de README, INVENTARIO y guía de Git.

## 5. Qué se ajustó
- Cuestioné las funcionalidades que la IA agregó por su cuenta (modo oscuro, filtro y lista de repositorios).
- Modifiqué a mano el botón de tema para que el texto cambie entre «Modo oscuro» y «Modo claro».
- Revisé y completé la documentación.

## 6. Cómo se verificó
- Ejecuté `npm run build`, que revisa los tipos con TypeScript, sin errores.
- Comparé el resultado con la captura del portafolio E2 (`docs/captura-e2.png`) en pantalla grande y en móvil.
- Probé a mano el formulario (errores y confirmación), el filtro, el modo oscuro, el menú con sección activa y una ruta inexistente.
- Recorrí el código siguiendo el flujo `main.tsx → App.tsx → Layout → página → componentes`.


## Reflexión final
Esta evaluación me mostró que usar IA para avanzar rápido no reemplaza entender el código. La IA me ahorró la parte más pesada, que era armar la estructura y migrar el HTML y CSS, pero tuve que dedicar tiempo a comprender cómo se conectan ciertas piezas.

Lo que más me costó fue distinguir cuándo usar `useState`, `useEffect` y Context. Lo ordené con una idea: los datos nacen en `data`, bajan por props, lo que cambia se guarda en estado, lo que sale al exterior (como la API) va en un efecto, y lo que necesita toda la app va en un contexto.

También aprendí a cuestionar lo que me entrega la IA: me di cuenta de que había agregado cosas que no estaban en mi portafolio original, y eso me obligó a cambiar ciertas partes.

Si lo hiciera de nuevo, escribiría yo más partes desde cero (por ejemplo el formulario) y usaría la IA solo para revisar, porque es lo que mejor se queda en la cabeza.