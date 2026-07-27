export const CATEGORY_META = {
  Prompts: { color: '#c4a6ff', bg: 'rgba(139,92,246,0.15)' },
  Automatizaciones: { color: '#6ee7b7', bg: 'rgba(5,150,105,0.15)' },
  Herramientas: { color: '#7dd3fc', bg: 'rgba(2,132,199,0.15)' },
  'Guías': { color: '#f7c382', bg: 'rgba(242,163,60,0.14)' },
  Plantillas: { color: '#fda4af', bg: 'rgba(225,29,72,0.15)' },
};

export const CHIP_LIST = ['Todos', 'Prompts', 'Automatizaciones', 'Herramientas', 'Guías', 'Plantillas'];

export const ACTION_LABEL = { prompt: 'Copiar', file: 'Descargar', guide: 'Leer', link: 'Abrir' };

export const RESOURCES = [
  {
    slug: 'workflow-n8n-cotizaciones-pdf',
    title: 'Workflow n8n: cotizaciones en PDF automáticas',
    category: 'Automatizaciones',
    delivery: 'file',
    date: '2026-07-20',
    description: 'Arma la cotización en PDF, la sube a Drive y le avisa al cliente por WhatsApp, todo desde un solo flujo.',
    bodyParagraphs: [
      'Este es el flujo que uso para no volver a armar una cotización a mano. Entra el pedido, se llena una plantilla, se genera el PDF y queda guardado en la carpeta del cliente.',
      'Incluye el archivo .json listo para importar en n8n, más la plantilla del PDF en Google Docs que el flujo llena automáticamente.',
    ],
    contents: ['Flujo n8n (.json) con 6 nodos', 'Plantilla de cotización en Google Docs', 'Instrucciones de configuración de credenciales'],
    tiktok: 'https://www.tiktok.com/@andresgodinez/video/7301000000001',
  },
  {
    slug: 'prompt-auditar-web-60-segundos',
    title: 'Prompt para auditar tu web en 60 segundos',
    category: 'Prompts',
    delivery: 'prompt',
    date: '2026-07-15',
    description: 'Pégalo con tu URL y te devuelve una auditoría rápida de UX, copy y SEO técnico.',
    bodyParagraphs: [
      'Lo uso antes de la primera llamada con un cliente nuevo: le paso su propia web al modelo y en un minuto tengo tres cosas concretas para conversar.',
    ],
    content: 'Actúa como consultor de producto y SEO técnico. Voy a darte la URL de una web: [URL].\n\nRevisa lo que puedas inferir de su estructura, copy y metadatos, y devuélveme:\n1. Tres problemas de UX que un visitante notaría en los primeros 5 segundos.\n2. Tres mejoras de copy en la sección principal (hero).\n3. Dos señales de SEO técnico que probablemente estén mal (títulos, meta description, velocidad).\n\nSé directo y concreto, sin relleno.',
    tiktok: 'https://www.tiktok.com/@andresgodinez/video/7301000000002',
  },
  {
    slug: 'ebook-automatiza-tu-negocio-30-dias',
    title: 'Ebook: automatiza tu negocio en 30 días',
    category: 'Guías',
    delivery: 'file',
    date: '2026-07-10',
    description: 'Un plan de 30 días para pasar de hacerlo todo a mano a tener tus primeros procesos corriendo solos.',
    bodyParagraphs: [
      'No es teoría: es el mismo orden que sigo con clientes nuevos, semana por semana, empezando por lo que más tiempo te quita hoy.',
      'Incluye una checklist por semana para que sepas exactamente qué automatizar primero.',
    ],
    contents: ['Ebook en PDF, 42 páginas', 'Checklist semanal imprimible', '3 plantillas de flujo mencionadas en el libro'],
    tiktok: 'https://www.tiktok.com/@andresgodinez/video/7301000000003',
  },
  {
    slug: 'conectar-whatsapp-business-n8n',
    title: 'Paso a paso: conectar WhatsApp Business a n8n',
    category: 'Guías',
    delivery: 'guide',
    date: '2026-07-05',
    description: 'La configuración exacta que uso para recibir y responder mensajes desde un flujo automático.',
    bodyParagraphs: [
      'La parte que más se traba no es n8n, es la API de WhatsApp Business. Aquí está el orden exacto que me funcionó, incluyendo los pasos de Meta que nadie explica bien.',
      'Al final del flujo vas a poder recibir un mensaje, procesarlo y responder automáticamente sin tocar el teléfono.',
    ],
    contents: ['Cuenta de Meta Business verificada', 'Número de WhatsApp Business API', 'Nodo webhook configurado en n8n'],
    tiktok: 'https://www.tiktok.com/@andresgodinez/video/7301000000004',
  },
  {
    slug: '5-herramientas-ia-gratis-semana',
    title: 'Las 5 herramientas de IA gratis que uso cada semana',
    category: 'Herramientas',
    delivery: 'guide',
    date: '2026-06-28',
    description: 'Las que de verdad uso, para qué sirve cada una y cuándo no vale la pena pagar la versión pro.',
    bodyParagraphs: [
      'Pruebo muchas herramientas nuevas, pero estas cinco llevan meses sin salir de mi flujo de trabajo diario.',
      'Para cada una te digo el plan gratuito exacto que uso y en qué momento sí conviene pagar.',
    ],
    tiktok: 'https://www.tiktok.com/@andresgodinez/video/7301000000005',
  },
  {
    slug: 'brief-proyecto-web-clientes',
    title: 'Brief de proyecto web para clientes',
    category: 'Plantillas',
    delivery: 'file',
    date: '2026-06-20',
    description: 'Las preguntas que le hago a un cliente nuevo antes de cotizar, en un documento editable.',
    bodyParagraphs: [
      'Este brief me ahorra al menos una llamada por proyecto: llega respondido y ya sé si el proyecto tiene sentido para mí.',
      'Está pensado para copiar y pegar en tu propio Notion o Google Docs.',
    ],
    contents: ['Documento editable (Google Docs)', '12 preguntas organizadas en 4 bloques'],
    tiktok: 'https://www.tiktok.com/@andresgodinez/video/7301000000006',
  },
  {
    slug: 'prompts-guiones-tiktok',
    title: 'Prompts para escribir guiones de TikTok',
    category: 'Prompts',
    delivery: 'prompt',
    date: '2026-06-12',
    description: 'Tres prompts para pasar de una idea suelta a un guión grabable en minutos.',
    bodyParagraphs: [
      'Uso estos tres en orden: primero para encontrar el ángulo, luego para el guión y al final para el gancho de los primeros 3 segundos.',
    ],
    content: 'Tengo esta idea para un video corto sobre tecnología: [IDEA].\n\nAyúdame a convertirla en un guión de 45 segundos con:\n1. Un gancho de una línea para los primeros 3 segundos.\n2. El desarrollo en 3 puntos concretos, sin relleno.\n3. Un cierre con una sola acción que le pido a quien ve el video.\n\nEscribe en un tono directo, como si se lo explicaras a un amigo.',
    tiktok: 'https://www.tiktok.com/@andresgodinez/video/7301000000007',
  },
  {
    slug: 'checklist-antes-de-lanzar-web',
    title: 'Checklist antes de lanzar una web',
    category: 'Guías',
    delivery: 'guide',
    date: '2026-06-05',
    description: 'Lo que reviso antes de entregar cualquier proyecto: velocidad, SEO técnico, formularios, dominios.',
    bodyParagraphs: [
      'Esta es literalmente la lista que reviso antes de mandar el mensaje de "ya quedó" a un cliente.',
      'Toma diez minutos revisarla completa y evita el 90% de los correos de "oye, esto no funciona" de la primera semana.',
    ],
    tiktok: 'https://www.tiktok.com/@andresgodinez/video/7301000000008',
  },
  {
    slug: 'como-cobrar-primer-proyecto-freelance',
    title: 'Cómo cobrar tu primer proyecto freelance',
    category: 'Guías',
    delivery: 'guide',
    date: '2026-05-28',
    description: 'Cómo armar una cotización, qué pedir por adelantado y qué hacer si el cliente se demora en pagar.',
    bodyParagraphs: [
      'La pregunta que más me hacen en los comentarios no es técnica, es esta: cómo cobrar sin sentir que estás pidiendo un favor.',
      'Aquí está el esquema que uso: cuánto pedir de adelanto, cuándo pedir el resto y qué hacer si se atrasa el pago.',
    ],
    tiktok: 'https://www.tiktok.com/@andresgodinez/video/7301000000009',
  },
];

export function findResource(slug) {
  return RESOURCES.find(r => r.slug === slug) || null;
}

export function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('es-PE', { day: 'numeric', month: 'short', year: 'numeric' });
}
