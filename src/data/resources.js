export const CATEGORY_META = {
  Prompts: { color: "#c4a6ff", bg: "rgba(139,92,246,0.15)" },
  Automatizaciones: { color: "#6ee7b7", bg: "rgba(5,150,105,0.15)" },
  Herramientas: { color: "#7dd3fc", bg: "rgba(2,132,199,0.15)" },
  "Guías": { color: "#f7c382", bg: "rgba(242,163,60,0.14)" },
  Plantillas: { color: "#fda4af", bg: "rgba(225,29,72,0.15)" },
};

export const CHIP_LIST = [
  "Todos",
  "Prompts",
  "Automatizaciones",
  "Herramientas",
  "Guías",
  "Plantillas",
];

export const ACTION_LABEL = {
  prompt: "Copiar",
  file: "Descargar",
  guide: "Leer",
  link: "Abrir",
};

export function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("es-PE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
