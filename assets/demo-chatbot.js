const asset = filename => new URL(filename, import.meta.url).href;

export function renderChatbotDemo({ jsx, jsxs }) {
  return jsx("section", {
    id: "demo-chatbot",
    className: "chatbot-demo",
    "aria-labelledby": "demo-chatbot-heading",
    children: jsxs("div", {
      className: "chatbot-demo-inner",
      children: [
        jsxs("div", {
          className: "chatbot-demo-copy",
          children: [
            jsx("h2", { id: "demo-chatbot-heading", children: "Demo de chatbot para importación de maquinaria" }),
            jsx("p", { children: "Participé junto al equipo de sistemas en el desarrollo de un chatbot conectado a un CRM para precalificar prospectos y facilitar el seguimiento comercial. El video muestra cómo el bot identifica la máquina requerida, confirma la capacidad de producción y el voltaje, y prepara un resumen para el asesor." }),
            jsxs("p", {
              className: "chatbot-demo-contribution",
              children: [jsx("strong", { children: "Mi aporte. " }), "Documenté el flujo, definí los límites del bot, diseñé el embudo de precalificación y di retroalimentación al desarrollador durante la implementación."]
            })
          ]
        }),
        jsxs("figure", {
          className: "chatbot-demo-media",
          children: [
            jsx("video", {
              controls: true,
              playsInline: true,
              preload: "none",
              poster: asset("./palaz-demo-portada.webp"),
              src: asset("./PALAZ-demo-precalificacion-Full-HD.mp4"),
              "aria-label": "Video de la demo de precalificación de PALAZ",
              children: "Tu navegador no puede reproducir este video."
            }),
            jsx("figcaption", { children: "Simulación del flujo de PALAZ · 1:30 · Sin audio" })
          ]
        })
      ]
    })
  });
}
