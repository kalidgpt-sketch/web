# Dalil · CCSE explicado en árabe

Web app estática para preparar la prueba CCSE (nacionalidad española) con explicaciones, vocabulario y audio en árabe. Incluye una portada con lista de espera y una app de práctica que funciona sin conexión.

## Estado

Versión de demostración. Las 18 preguntas de `data/preguntas-ejemplo.js` están redactadas para la demo y **no son las preguntas oficiales** del Instituto Cervantes.

## Por qué existe

Hay muchas apps gratuitas del CCSE, incluida la oficial del Instituto Cervantes, pero están en español. Como mucho traducen la interfaz o un glosario. Dalil se diferencia porque explica cada pregunta en árabe, enseña el vocabulario del examen y lee el texto en voz alta.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Portada en árabe con la lista de espera |
| `practicar.html` | App: modo estudio, simulacro (25 preguntas, 45 min, aprobado con el 60 %) y lista de fallos |
| `privacidad.html` | Política de privacidad (borrador: revísala antes de publicar) |
| `assets/app.js` | Lógica de la app; el progreso se guarda en `localStorage` |
| `assets/app.css` | Estilos compartidos, con fuentes del sistema (sin Google Fonts) |
| `data/preguntas-ejemplo.js` | Banco de preguntas de ejemplo |
| `sw.js`, `manifest.webmanifest` | Instalación en el móvil y uso sin conexión |

## Probar en local

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Publicar

Está preparada para Netlify: el formulario `lista-espera` usa Netlify Forms (`data-netlify="true"`), así que los envíos aparecen en el panel de Netlify sin servidor propio. En otro alojamiento la página avisa de que el formulario no está conectado.

## Añadir preguntas

Cada pregunta sigue el formato descrito al principio de `data/preguntas-ejemplo.js`. Antes de cargar el banco oficial del Instituto Cervantes:

1. Comprueba sus condiciones de reutilización en el aviso legal del Instituto Cervantes. Otras apps lo reutilizan, pero eso no garantiza que esté permitido.
2. Redacta las explicaciones con tus propias palabras.
3. Pide a una persona nativa que revise el árabe.

## Pendiente

- Confirmar en `privacidad.html` los datos del responsable y del proveedor de alojamiento.
- Audio en dariya grabado por personas, además de la voz del dispositivo.
- Módulos DELE A2 y teoría DGT.
