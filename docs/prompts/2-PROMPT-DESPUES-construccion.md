# Prompt para después: construir la web

**No lo uses todavía.** Primero hay que cerrar `docs/BASES.md` con la investigación de esta noche. Cuando estén las bases, revisa este prompt por si algo ha cambiado y pégalo en Claude Code sobre la carpeta `nacionalidad/`.

---

Vas a trabajar solo durante varias horas construyendo la versión 1 de la app de nacionalidad. No me hagas preguntas ni te pares a esperar respuesta: decide tú y apunta cada decisión.

Antes de nada lee, en este orden: `AGENTS.md`, `docs/BASES.md`, `docs/investigacion/RESUMEN.md` y `docs/prototipo-nacionalidad.html`. Las bases mandan: si algo de este prompt las contradice, sigue las bases y apúntalo en `docs/DECISIONES.md`.

## Reglas de autonomía

1. **Cuando dudes, elige la opción más sencilla y reversible**, apúntala en `docs/DECISIONES.md` con el motivo y sigue.
2. **Nada irreversible ni público:** no publiques, no hagas push a ramas principales, no borres archivos que no hayas creado tú, no te registres en servicios ni gastes dinero. Trabaja en una rama nueva.
3. **No inventes datos.** Todo el contenido sale de `docs/investigacion/`. Lo que no esté verificado lleva `estado: pendiente` y no se muestra como cierto en la app.
4. **No copies material con derechos de autor** salvo que la investigación confirme que se puede, y en las condiciones que diga.
5. **Si algo hace dudar del proyecto**, apúntalo en `docs/ALERTAS.md` y continúa.
6. **Guarda el progreso** en `docs/PROGRESO.md` al terminar cada bloque.
7. **Ideas nuevas** a `docs/IDEAS.md`, no a la app.

## Bloque 1. Datos

- Banco de contenido en archivos de datos separados del código (por ejemplo, JSON), con los campos `fuente`, `fecha_verificacion` y `estado` (`verificado` o `pendiente`) en cada elemento.
- Primero el CCSE, organizado por los bloques del temario oficial. Luego el trámite paso a paso. El DELE A2 solo si las bases lo incluyen en la versión 1.

## Bloque 2. Web

- Web instalable (PWA), mobile-first, ligera, que funcione sin conexión en lo básico.
- Pantallas de la versión 1 según `BASES.md` (por defecto: inicio con progreso, tests por bloque, simulacro, resultados por bloque, repaso de errores y guía del trámite).
- Estilo del prototipo aprobado: colores, tipografía, tarjetas, anillos, modo claro y oscuro.
- Progreso guardado en el dispositivo; sin cuentas ni datos personales.
- Interfaz preparada para varios idiomas (español y árabe con RTL, salvo que las bases digan otra cosa).
- Aviso visible: herramienta de práctica no oficial, que no garantiza aprobar, con enlaces a las fuentes oficiales.
- Ilustraciones solo con licencia clara o SVG propios, anotadas en `docs/LICENCIAS.md`.
- Comprueba que funciona: ábrela en un navegador sin interfaz, revisa errores de consola y guarda capturas de las pantallas principales en `docs/capturas/`.

## Bloque 3. Cierre

Deja `docs/INFORME-SESION.md` con: qué hiciste y qué quedó a medias, decisiones tomadas, alertas, datos pendientes de verificar, tu veredicto honesto, los 3 siguientes pasos (empezando por cómo probarla con personas reales) y el prompt exacto para continuar en una sesión nueva.
