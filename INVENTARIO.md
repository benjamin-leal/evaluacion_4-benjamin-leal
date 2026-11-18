# Inventario de la Evaluación 2

Este documento lista **todo lo que tenía mi portafolio de la E2** (hecho solo con HTML y CSS) y explica **qué pasó con cada cosa** al migrarlo a React + TypeScript: si se conservó, si se corrigió o si es nuevo.

- Portafolio original: https://benjamin-leal.github.io/portafolioweb/
- Captura del original: [`docs/captura-e2.png`](docs/captura-e2.png)

## 1. Qué había en la E2 y dónde está ahora

| Elemento de la E2 | Estado | Dónde está ahora |
| --- | --- | --- |
| Enlace «Saltar al contenido principal» | Conservado | `src/components/SaltarAlContenido.tsx` |
| Cabecera con marca y menú (Inicio, Sobre mí, Trabajos, Contacto) | Conservado | `src/components/Cabecera.tsx` |
| Portada: foto, título, lema y 2 botones | Conservado | `src/components/Hero.tsx` |
| Sobre mí y datos rápidos (carrera, intereses, busco) | Conservado | `src/components/SobreMi.tsx` y `src/data/perfil.ts` |
| Tecnologías agrupadas (Frontend, Backend, Herramientas) | Conservado, con React, TypeScript y Vite sumados | `src/data/perfil.ts` |
| Tres tarjetas de trabajos | Conservado | `src/components/TarjetaProyecto.tsx` y `src/data/proyectos.ts` |
| Formulario de contacto | **Corregido** | `src/components/FormularioContacto.tsx` |
| Pie de página | Conservado | `src/components/Pie.tsx` |
| Colores, fuentes, espaciados y puntos de quiebre | Conservado | `src/styles/style.css` |
| Imágenes y textos alternativos | Conservado | `src/assets/` |

## 2. Qué se conservó

La estructura de las secciones, la jerarquía visual, la paleta (violeta para identidad y frontend, verde azulado para backend y ámbar para acciones), las tipografías (serifa para títulos y sans-serif del sistema para el texto) y los dos puntos de quiebre (768 px y 1100 px). Con el modo claro, el sitio se ve igual que la captura de la E2.

## 3. Qué se corrigió y por qué

- **Navegación.** En la E2 el menú usaba anclas (`#trabajos`) dentro de una sola página. Ahora cada sección es una ruta de React Router (`/trabajos`), con la sección activa marcada en el menú y una página para rutas inexistentes.
- **Formulario.** En la E2 la confirmación se lograba solo con CSS (`:target`) y el formulario no validaba nada. Ahora valida nombre, formato del correo y un mensaje de al menos 10 caracteres, muestra el error bajo cada campo y confirma el envío. Sigue siendo una demostración: el mensaje no se envía a ningún lugar.
- **Botones «Ver repositorio».** Antes apuntaban a `#trabajos`. Ahora abren un enlace externo en una pestaña nueva.
- **Estilos de la sección «Sobre mí».** Los selectores por `id` (`#sobre-mi`) pasaron a una clase (`.sobre-mi`), porque ya no es una sola página con anclas.

## 4. Qué se agregó (no estaba en la E2)

- **Repositorios de GitHub** en la página Trabajos, consumidos desde la API pública de GitHub, con estados de carga, éxito y error.
- **Modo oscuro**, con Context API. El modo claro queda idéntico a la E2.
- **Filtro** de trabajos por tipo (Todos, Frontend, Backend).

Estas tres cosas responden a los criterios de la rúbrica sobre consumo de API, gestión del estado y funcionalidades.

## 5. Pendiente

- Reemplazar en `src/data/proyectos.ts` el enlace de «Ver repositorio» (hoy apunta a mi perfil de GitHub) por la URL real de cada proyecto.