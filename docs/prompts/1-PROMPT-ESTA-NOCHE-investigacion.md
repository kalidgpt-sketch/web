# Prompt para esta noche: solo investigación

Abre Claude Code sobre la carpeta `nacionalidad/` y pega todo lo que hay debajo de la línea.

---

Vas a trabajar solo durante varias horas en la fase de investigación de una app web para preparar la **nacionalidad española por residencia** (CCSE, DELE A2 y el trámite paso a paso), pensada para personas inmigrantes en España. El nombre es provisional. Yo no voy a estar disponible hasta mañana, así que **decide tú** y sigue avanzando. No me hagas preguntas ni te pares a esperar respuesta.

Las reglas del proyecto están en `AGENTS.md` (ya cargadas por `CLAUDE.md`). Aplícalas durante toda la sesión, en modo autónomo.

## Lo que NO debes hacer en esta sesión

- No propongas la estructura de la app, no crees datos para la app y no escribas código. Eso se decide mañana con tu investigación delante.
- No publiques ni subas nada a internet, no hagas push, no borres archivos que no hayas creado tú, no te registres en servicios ni gastes dinero.

## Reglas de trabajo

1. **Cuando dudes, elige la opción más sencilla**, apúntala en `docs/DECISIONES.md` con el motivo y sigue.
2. **No inventes datos.** Cada cifra, requisito, plazo o precio lleva fuente con enlace y fecha de consulta. Si no la encuentras, márcalo como `PENDIENTE DE VERIFICAR`.
3. **Si dos fuentes se contradicen**, anota ambas y cuál es más fiable (la oficial y la más reciente ganan).
4. **Si encuentras algo que hace dudar del proyecto**, no te pares: apúntalo en `docs/ALERTAS.md` con tu valoración honesta y continúa.
5. **Guarda el progreso** en `docs/PROGRESO.md` al terminar cada apartado, para que una sesión nueva pueda seguir si esta se corta.
6. **No te atasques.** Si un apartado no da más de sí tras un esfuerzo razonable, deja lo encontrado, marca lo que falta y pasa al siguiente.

## Qué investigar

Crea `docs/investigacion/` con un archivo por apartado:

1. **`ccse.md`:** quién lo organiza, estructura del examen (número de preguntas, tiempo, nota para aprobar), bloques del temario, manual oficial y banco de preguntas publicado, si se pueden reutilizar y con qué condiciones, precio, cómo inscribirse, fechas, quién está exento.
2. **`dele-a2.md`:** estructura y partes, criterios para aprobar, precio, fechas, quién está exento, materiales de práctica oficiales y sus condiciones de uso.
3. **`tramite.md`:** requisitos de la nacionalidad por residencia, documentos, años de residencia según el caso, tasas, cómo se presenta la solicitud, tiempos de resolución y errores frecuentes. Fuentes: Ministerio de Justicia, su sede electrónica y BOE.
4. **`competencia.md`:** una tabla de las principales apps, webs y academias online que preparan el CCSE y el DELE A2 (unas 10 como máximo, las más visibles): precio, número de preguntas, idiomas, valoración, quejas habituales en reseñas y qué hacen bien. Si un dato no se ve, pon "sin dato".
5. **`publico.md`:** cifras oficiales de solicitudes y concesiones de nacionalidad por residencia, de personas que se presentan al CCSE y de nacionalidades de origen más frecuentes (para saber qué idiomas de apoyo importan), si existen.
6. **`fuentes/`:** guarda aquí los PDF oficiales que encuentres (manuales, guías, normativa), con una lista en `fuentes/LISTA.md` de cada archivo: de dónde sale, enlace y fecha. Son para consulta interna, no para publicarlos.

## Cierre

Al terminar escribe `docs/investigacion/RESUMEN.md`:

1. Qué ofrece la competencia y qué hueco real queda.
2. Qué contenido oficial se puede usar y con qué límites legales.
3. Qué idiomas de apoyo tendrían más sentido, según los datos.
4. Las alertas principales.
5. Qué datos siguen pendientes de verificar.
6. Tu veredicto honesto: seguir, cambiar o parar, y por qué.
7. Qué decisiones debo tomar mañana para cerrar las bases del proyecto.

Si te quedas sin contexto o la sesión se corta, lo prioritario es que `PROGRESO.md` y `RESUMEN.md` estén al día.
