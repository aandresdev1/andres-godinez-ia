---
title: "Bot de Telegram para registrar gastos de Yape en Sheets"
category: "Plantillas"
delivery: "guide"
gated: true
date: "2026-08-19"
description: "Mandas la captura al bot, Gemini extrae monto y fecha, y queda registrada en tu Sheets con backup en Drive."
tiktok: "https://www.tiktok.com/@aandresdev"
contents:
  - "Plantilla JSON del workflow lista para importar en n8n"
  - "La estructura exacta de la hoja de Google Sheets"
  - "Qué credenciales necesitas y cómo se conectan"
---

Anotar los gastos a mano es de esas cosas que todos sabemos que hay que hacer y casi nadie sostiene más de dos semanas. Esta plantilla se salta el paso: mandas la captura del Yape al bot de Telegram, el bot lee el monto y la fecha con IA, y la fila cae sola en tu Google Sheets. El screenshot original queda guardado en Drive por si necesitas auditar después.

Configurarlo la primera vez toma unos 30 minutos. Después son cinco segundos por gasto: captura, enviar, escribir en qué gastaste.

**Lo que necesitas:** una cuenta de n8n (self-hosted o Cloud), una cuenta de Google (Sheets + Drive), acceso a la API de Google Gemini, y un bot de Telegram con su token.

## 1. Cómo funciona el flujo

El bot maneja tres caminos distintos según cómo mandes el pago:

- **Foto + caption en el mismo mensaje** → camino feliz. Gemini extrae los datos, sube el screenshot a Drive, y guarda la fila en Sheets con el caption como descripción.
- **Foto sin caption** → guarda los datos como *pendiente* asociado a tu chat y te pide por Telegram que envíes la descripción en otro mensaje.
- **Texto suelto** → un clasificador con Gemini decide si estás mandando la descripción de un pendiente o si es conversación normal. Si es descripción, cierra el pendiente y guarda la fila. Si no, responde un agente conversacional con memoria por chat.

Antes de todo eso, el bot valida que tu número esté en una hoja de participantes autorizados. Sin eso, no procesa nada. Es lo que permite tenerlo abierto sin miedo a que un extraño registre gastos en tu Sheets.

> El clasificador está en Gemini flash-lite con temperatura 0 y máximo 8 tokens. Es lo suficientemente barato para no notarlo en la cuenta y suficientemente rápido para que no sientas latencia.

## 2. Prepara el Google Sheets

Crea un Sheets con dos pestañas. Los nombres importan porque el workflow los busca por nombre exacto.

**Pestaña `Hoja 1`** (donde se guardan las compras). Estas columnas, en este orden:

| Columna              | Qué guarda                                      |
| -------------------- | ----------------------------------------------- |
| Monto                | El número que extrae Gemini del Yape            |
| Fecha                | La fecha del Yape (no la del registro)          |
| Hora                 | La hora del Yape                                |
| Descripción          | Lo que tú escribiste (caption o mensaje aparte) |
| Descripción del yape | El texto que puso el que recibió el pago        |
| Link del screenshot  | URL del backup en Drive                         |
| Registrado por       | Tu nombre según la hoja de participantes        |
| Fecha de registro    | Timestamp de cuándo se guardó la fila           |

**Pestaña `Participantes / Numeros`**. Dos columnas mínimo: `Codigo` (el `chat.id` de Telegram) y `Nombre`. Cualquier persona cuyo `chat.id` esté ahí puede registrar gastos; el resto queda fuera.

Para saber tu `chat.id`, escríbele a [@userinfobot](https://t.me/userinfobot) en Telegram y te lo devuelve.

## 3. Crea el bot de Telegram

Habla con [@BotFather](https://t.me/BotFather), envía `/newbot` y sigue las dos preguntas. Al final te da un token con formato `123456789:ABC…`. Guárdalo, es la credencial que n8n va a usar para leer y responder mensajes.

Después ve al chat con tu bot y envíale cualquier cosa. Sin eso, Telegram no le va a entregar tus mensajes al webhook.

## 4. Importa el workflow en n8n

Descarga el JSON de la plantilla desde acá: **[Tracker Gastos.json en Google Drive](https://drive.google.com/file/d/13Vyj_IzMWtCh0rskVlb7zL8ZLRUsZwYX/view?usp=sharing)**.

En n8n: menú `···` de la vista de workflows → **Import from File** → seleccionas el JSON. Aparece el flujo completo con los nodos ya conectados.

Antes de activarlo, tienes que rellenar cuatro credenciales:

- **Telegram Trigger + nodos Telegram**: pega el token de BotFather.
- **Google Sheets**: OAuth con la cuenta dueña del Sheets. En cada nodo de Sheets, cambia el `documentId` al de *tu* hoja (está en la URL, entre `/d/` y `/edit`).
- **Google Drive**: la misma cuenta OAuth. En el nodo *Drive - Subir screenshot*, cambia la carpeta destino a una tuya llamada **Screenshots** (o el nombre que uses).
- **Google Gemini** (en los tres nodos que lo usan: Vision, clasificador, agente): tu API key de [Google AI Studio](https://aistudio.google.com/apikey).

Los nombres de las pestañas (`Hoja 1` y `Participantes / Numeros`) el workflow los busca por nombre, así que si vas a cambiarlos, cámbialos también en los tres nodos de Sheets.

## 5. Activar y probar

Prende el toggle de **Active** en la esquina superior derecha del workflow. Desde ese momento, Telegram le va a mandar cada mensaje nuevo del bot.

Manda una captura de Yape al bot con un caption tipo "almuerzo" y verifica:

1. Te responde con "procesando comprobante…"
2. Te confirma que quedó guardado
3. La fila aparece en tu Sheets
4. El screenshot está en tu carpeta de Drive

Si algo falla, abre el workflow en n8n y mira el panel de **Executions** — cada mensaje deja una traza con los datos de cada nodo. Es donde vas a diagnosticar el 90% de los problemas.

### Errores comunes

- **Cambiar el nombre de las pestañas sin actualizar los nodos de Sheets.** El workflow no encuentra dónde escribir y se cae en silencio.
- **Olvidarse de agregar tu `chat.id` en Participantes.** El bot recibe tu mensaje, no te encuentra en la hoja, y no hace nada. Tampoco te avisa.
- **Poner el token de Telegram en un nodo pero no en los otros.** Cada nodo de Telegram tiene su credencial; asegúrate de que apunten a la misma.
- **Mandar la foto sin caption y después no responder al bot.** Se queda un pendiente colgado en el static data. Manda cualquier descripción para cerrarlo.
- **Cuota de Gemini gratuita agotada.** Si registras muchos gastos en un día, revisa los límites en AI Studio. Para uso personal, flash-lite alcanza sobrado.

Cuando lo tienes andando, cambia la relación con anotar gastos: pasas de "tengo que sentarme a poner las cosas del mes" a que la hoja ya esté al día siempre. Y lo importante — el análisis, ver en qué se te va la plata — recién ahí empieza a valer la pena.
