---
title: "Todoist + Claude: organiza tu semana con IA"
category: "Guías"
delivery: "guide"
gated: true
date: "2026-07-27"
description: "Claude revisa lo que avanzaste, te da retroalimentación y escribe tus tareas de la semana en Todoist."
tiktok: "https://www.tiktok.com/@aandresdev"
contents:
  - "Método completo en 5 pasos"
  - "Cómo conectar Claude con Todoist"
  - "El prompt de instrucciones del Proyecto"
---

Al terminar vas a tener un sistema donde tú solo capturas ideas, y cada fin de semana Claude revisa lo que avanzaste, te da retroalimentación y escribe las tareas de la semana siguiente directamente en tu Todoist — siempre alineadas a tus metas del trimestre.

Configurarlo toma unos 20 minutos. Después son 10 minutos por semana.

**Lo que necesitas:** una cuenta de Todoist (la gratuita alcanza), una cuenta de Claude con acceso a Proyectos y conectores, y tus metas del trimestre aunque sea en borrador.

## 1. Todo en un solo lugar

La base es que todo lo que tengas que hacer viva en un solo lugar. Manda cada idea al **Inbox** de Todoist apenas se te ocurra, sin detenerte a elegir proyecto, fecha ni prioridad — eso mata el hábito. La captura tiene que costar menos de cinco segundos.

> Si la mitad de tus pendientes siguen en tu cabeza, Claude no puede ayudarte con lo que no ve.

Agrupa después en pocas categorías por **área de vida**, no por tema:

- Negocio
- Trabajo
- Vida personal

Puedes agregar más, pero resiste la tentación de crear quince. Con demasiadas categorías vas a dudar dónde va cada cosa, y esa duda es la que hace que dejes de capturar. Dentro de cada proyecto, usa secciones para separar lo recurrente de lo puntual.

**Antes de seguir:** dedica 20 minutos a vaciar la cabeza. Escribe absolutamente todo lo pendiente que se te ocurra, sin filtrar. Ese volcado inicial es lo que le da contexto real a Claude desde el primer día.

## 2. Conectar Claude con Todoist

Se hace una sola vez:

1. Entra a **Configuración → Conectores**
2. Haz clic en **Explorar conectores**
3. Busca **Todoist** y haz clic en **Conectar**
4. Inicia sesión en Todoist y autoriza el acceso

Desde ahí Claude puede leer tus tareas, crearlas, reprogramarlas y completarlas.

Al principio te va a pedir permiso cada vez que use una herramienta del conector — déjalo así hasta que le tengas confianza. Cuando ya sepas qué hace, en la página del conector puedes marcar herramientas específicas como permitidas siempre.

Para comprobar que funciona, abre un chat nuevo y escribe:

```
¿Qué tareas tengo pendientes esta semana en Todoist?
```

Si te responde con tu lista real, ya está.

## 3. Armar el Proyecto en Claude

Un chat suelto no sabe quién eres ni hacia dónde vas, así que cada semana tendrías que explicárselo de nuevo. Un Proyecto guarda ese contexto de forma permanente.

Crea un Proyecto en Claude con instrucciones personalizadas. Ahí van tres bloques:

- **Cómo funciona tu semana real** con las horas que de verdad tienes
- **La rutina de supervisión** que quieres seguir
- **Tus metas del trimestre** con número y fecha

Sin ese último bloque el sistema se cae, porque es lo que hace que Claude priorice según lo que importa y no según lo que grita más fuerte.

### El prompt de instrucciones

Copia esto en las instrucciones del Proyecto y reemplaza lo que está entre corchetes:

```
Eres mi asistente de productividad. Me ayudas a mantener el foco en mis
metas trimestrales y a decidir en qué trabajar cada semana.

## Sobre mí
[Tu nombre, a qué te dedicas, en qué estás trabajando ahora]

## Mi disponibilidad real
- Horas útiles por semana para proyectos propios: [número]
- Días o bloques ocupados: [ej. martes y jueves por la noche]
- Mi mejor franja para trabajo profundo: [ej. mañanas antes de las 10]

## Mis metas de este trimestre
1. [Meta 1, con número y fecha. Ej: cerrar 3 clientes nuevos antes del
   30 de septiembre]
2. [Meta 2]
3. [Meta 3]

Máximo tres. Si tengo más, no son metas: son deseos.

## Cómo quiero la revisión semanal
Cuando te escriba "revisión semanal", haz esto en orden:

1. Consulta mis tareas completadas de los últimos 7 días en Todoist
2. Consulta mis tareas pendientes y vencidas
3. Dime en dos o tres líneas qué avancé de verdad, ligándolo a cuál meta
   trimestral movió cada cosa
4. Señálame qué quedó sin avanzar y pregúntame por qué. No asumas la
   razón.
5. Dame retroalimentación honesta. Si una meta lleva dos semanas sin
   movimiento, dímelo directo. Si me estoy ocupando en cosas que no
   apuntan a ninguna meta, dímelo también.
6. Propón las tareas de la semana que entra, ordenadas por prioridad y
   marcando a qué meta sirve cada una
7. Espera mi confirmación antes de escribir nada en Todoist

## Reglas
- Nunca crees, modifiques ni completes tareas en Todoist sin que yo
  confirme primero
- Propón como máximo [número] tareas por semana. Prefiero pocas y
  cumplidas que muchas y arrastradas.
- Toda tarea debe empezar con un verbo y ser terminable en una sola
  sesión. Si no cabe en una sesión, pártela.
- Asigna cada tarea al proyecto correcto de Todoist: [lista tus
  proyectos]
- Si una tarea no sirve a ninguna meta trimestral, dímelo y pregúntame
  si de verdad vale la pena
- Sé directo. No me felicites por semanas flojas.
```

Ese último punto importa más de lo que parece. Si no lo pones, vas a recibir ánimo en vez de retroalimentación — y el ánimo no te mueve las metas.

## 4. La revisión semanal

Elige un día fijo. Domingo por la tarde funciona bien porque cierras la semana y ordenas la siguiente en la misma sesión. Abre el Proyecto y escribe **"revisión semanal"**. Claude:

- Lee tu Todoist
- Te dice qué avanzaste ligándolo a cada meta
- Señala qué quedó parado y te pregunta por qué

A partir de ahí es una conversación, no un reporte. Cuando te pregunte por qué algo no avanzó, responde con la verdad: "no me alcanzó el tiempo" y "se me hizo cuesta arriba empezar" llevan a soluciones distintas. Si mientes acá, el sistema entero se vuelve decorativo.

Discútele las prioridades. Si propone diez tareas y sabes que haces seis, pídele que corte cuatro y te diga cuáles sacrificar. **Elegir qué no hacer es la mitad del ejercicio.**

## 5. Reprogramar la semana

Cuando confirmas, Claude reprioriza y crea las tareas de la semana directamente en Todoist. Si tienes activada la aprobación por herramienta, te va a pedir permiso — acéptalo.

Abre Todoist y revisa que todo haya caído donde debía, sobre todo las primeras semanas. Es rápido y te ahorra encontrarte el lunes con tareas en el proyecto equivocado.

### La rutina, en resumen

| Cuándo              | Qué haces                                  | Cuánto toma         |
| ------------------- | ------------------------------------------ | ------------------- |
| Cada día            | Capturas en el Inbox de Todoist            | 5 segundos por idea |
| Domingo             | Escribes "revisión semanal" en el Proyecto | 10 minutos          |
| Domingo             | Discutes prioridades y confirmas           | 5 minutos           |
| Inicio de trimestre | Actualizas las metas en las instrucciones  | 20 minutos          |

### Errores comunes que rompen el sistema

- **Metas vagas sin número ni fecha.** "Crecer mi negocio" no le sirve a nadie; "facturar S/6,000 mensuales para el 30 de septiembre" sí.
- **No actualizarlas al cambiar de trimestre.** Un sistema que optimiza hacia metas vencidas es peor que no tener sistema.
- **Aceptar todo lo que propone sin discutir.** No es tu jefe. El valor está en la conversación, no en la obediencia.
- **Sobrecargar la semana** hasta que el sistema se sienta como una deuda. Empieza corto.
- **Dejar de capturar.** Si el Inbox se queda vacío una semana, no es que no tuviste pendientes: es que volviste a guardarlos en la cabeza.

No se trata de que hagas más cosas. Es que cada domingo sabes exactamente dónde estás parado respecto a lo que te importa, y empiezas el lunes sin la pregunta de "¿por dónde arranco?".
