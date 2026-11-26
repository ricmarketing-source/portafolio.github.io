const cases = [
  {
    "category": "Google Ads · Captación B2B",
    "name": "Realquim Industrias",
    "result": "170 conversiones · S/ 18,40 por conversión",
    "objective": "Mejorar la captación de prospectos y reducir el presupuesto diario a alrededor de S/ 20.",
    "work": "Reorganicé las campañas de Google Ads y ajusté su configuración de forma continua para aprovechar el presupuesto disponible. También trabajé en mejoras del proceso comercial.",
    "source": "Google Ads · Del 1 de agosto al 25 de noviembre de 2026",
    "file": "realquim",
    "metrics": [
      [
        "170",
        "conversiones"
      ],
      [
        "S/ 18,40",
        "por conversión"
      ]
    ]
  },
  {
    "category": "Google Ads · Captación B2B",
    "name": "Udustria Perú",
    "result": "S/ 57,21 por conversión · 108 conversiones",
    "objective": "Mejorar la calidad de los prospectos que llegaban desde la web y ordenar las campañas en un rubro de alto valor por venta.",
    "work": "Organicé las campañas de Google Ads según el presupuesto disponible, de S/ 50 a S/ 60 diarios.",
    "source": "Google Ads · Del 1 de agosto al 25 de noviembre de 2026",
    "file": "udustria",
    "metrics": [
      [
        "108",
        "conversiones"
      ],
      [
        "S/ 57,21",
        "por conversión"
      ]
    ]
  },
  {
    "category": "Meta Ads · Captación y seguimiento comercial",
    "name": "Canapés Comfort · España",
    "result": "Más de €100.000 en ventas reportadas · 762 leads a €1,30 en una campaña",
    "objective": "Aumentar las ventas y mejorar la calidad de los prospectos cuando las campañas directas a WhatsApp no eran una opción para el proyecto.",
    "work": "Implementé campañas con formularios de clientes potenciales y organicé la inversión en torno a un presupuesto de €50 a €60 diarios. También trabajé en el embudo de ventas, el proceso comercial y el seguimiento financiero.",
    "source": "Meta Ads · Del 1 al 31 de octubre de 2026. La captura muestra resultados de captación.",
    "file": "canapes",
    "metrics": [
      [
        "€100.000+",
        "en ventas reportadas"
      ],
      [
        "€1,30",
        "por lead en una campaña"
      ]
    ]
  },
  {
    "category": "Meta Ads · Captación y seguimiento comercial",
    "name": "Palaz Import · Importación de maquinaria",
    "result": "Más de US$ 40.000 en ventas reportadas · 922 conversaciones a S/ 1,89 en una campaña",
    "objective": "Mejorar las ventas y establecer un proceso para calificar a quienes consultaban por la importación de maquinaria.",
    "work": "Organicé las campañas de captación y coordiné con el equipo de sistemas la implementación de un CRM y un chatbot. También trabajé en el embudo de ventas, el seguimiento de prospectos y el control financiero.",
    "source": "Meta Ads · Del 1 de agosto al 31 de octubre de 2026. La captura muestra resultados de conversaciones.",
    "file": "palaz",
    "metrics": [
      [
        "US$ 40.000+",
        "en ventas reportadas"
      ],
      [
        "S/ 1,89",
        "por conversación en una campaña"
      ]
    ]
  }
];

function closeOnBackdrop(event) {
  if (event.target === event.currentTarget) event.currentTarget.close();
}

export function renderSuccessCases({ jsx, jsxs }) {
  return jsxs("section", {
    id: "casos-de-exito",
    "aria-labelledby": "success-cases-heading",
    className: "cases-section",
    children: [
      jsx("h2", { id: "success-cases-heading", className: "cases-heading", children: "Casos de éxito" }),
      jsx("div", {
        className: "cases-grid",
        children: cases.map(({ category, name, result, objective, work, source, file, metrics }) => {
          const dialogId = "evidencia-" + file;
          const image = new URL("./casos/" + file + ".png", import.meta.url).href;
          return jsxs("article", {
            className: "cases-card",
            children: [
              jsx("p", { className: "cases-category", children: category.split(" · ")[0] }),
              jsx("h3", { children: name }),
              jsx("dl", {
                className: "cases-metrics",
                children: metrics.map(([value, label]) => jsxs("div", {
                  children: [jsx("dt", { children: label }), jsx("dd", { children: value })]
                }, label))
              }),
              jsx("button", {
                type: "button",
                className: "cases-action",
                "aria-haspopup": "dialog",
                "aria-controls": dialogId,
                onClick: event => {
                  const trigger = event.currentTarget;
                  const dialog = document.getElementById(dialogId);
                  dialog.showModal();
                  dialog.addEventListener("close", () => trigger.focus(), { once: true });
                },
                children: "Ver evidencia"
              }),
              jsx("dialog", {
                id: dialogId,
                "aria-labelledby": dialogId + "-titulo",
                className: "cases-dialog",
                onClick: closeOnBackdrop,
                children: jsxs("div", {
                  className: "cases-dialog-content",
                  children: [
                    jsxs("header", {
                      className: "cases-dialog-header",
                      children: [
                        jsx("h3", { id: dialogId + "-titulo", children: name }),
                        jsx("button", {
                          className: "cases-close",
                          type: "button",
                          "aria-label": "Cerrar evidencia",
                          onClick: event => event.currentTarget.closest("dialog").close(),
                          children: "×"
                        })
                      ]
                    }),
                    jsx("p", { className: "cases-result", children: result }),
                    jsx("h4", { children: "Objetivo" }),
                    jsx("p", { children: objective }),
                    jsx("h4", { children: "Qué hice" }),
                    jsx("p", { children: work }),
                    jsxs("figure", {
                      children: [
                        jsx("div", {
                          className: "cases-evidence",
                          tabIndex: 0,
                          role: "region",
                          "aria-label": "Captura de resultados",
                          children: jsx("img", { src: image, loading: "lazy", alt: "Resultados de campaña de " + name })
                        }),
                        jsx("figcaption", { children: source })
                      ]
                    })
                  ]
                })
              })
            ]
          }, file);
        })
      })
    ]
  });
}
