const groups = [
  [
    "Google Ads · Captación B2B",
    [
      [
        "Realquim Industrias",
        "170 conversiones · S/ 18,40 por conversión",
        "Mejorar la captación de prospectos y reducir el presupuesto diario a alrededor de S/ 20.",
        "Reorganicé las campañas de Google Ads y ajusté su configuración de forma continua para aprovechar el presupuesto disponible. También trabajé en mejoras del proceso comercial.",
        "Google Ads · Del 1 de agosto al 25 de noviembre de 2026",
        "realquim",
        2
      ],
      [
        "Udustria Perú",
        "S/ 57,21 por conversión · 108 conversiones",
        "Mejorar la calidad de los prospectos que llegaban desde la web y ordenar las campañas en un rubro de alto valor por venta.",
        "Organicé las campañas de Google Ads según el presupuesto disponible, de S/ 50 a S/ 60 diarios.",
        "Google Ads · Del 1 de agosto al 25 de noviembre de 2026",
        "udustria",
        1
      ]
    ]
  ],
  [
    "Meta Ads · Captación y seguimiento comercial",
    [
      [
        "Canapés Comfort · España",
        "Más de €100.000 en ventas reportadas · 762 leads a €1,30 en una campaña",
        "Aumentar las ventas y mejorar la calidad de los prospectos cuando las campañas directas a WhatsApp no eran una opción para el proyecto.",
        "Implementé campañas con formularios de clientes potenciales y organicé la inversión en torno a un presupuesto de €50 a €60 diarios. También trabajé en el embudo de ventas, el proceso comercial y el seguimiento financiero.",
        "Meta Ads · Del 1 al 31 de octubre de 2026. La captura muestra resultados de captación.",
        "canapes",
        3
      ],
      [
        "Palaz Import · Importación de maquinaria",
        "Más de US$ 40.000 en ventas reportadas · 922 conversaciones a S/ 1,89 en una campaña",
        "Mejorar las ventas y establecer un proceso para calificar a quienes consultaban por la importación de maquinaria.",
        "Organicé las campañas de captación y coordiné con el equipo de sistemas la implementación de un CRM y un chatbot. También trabajé en el embudo de ventas, el seguimiento de prospectos y el control financiero.",
        "Meta Ads · Del 1 de agosto al 31 de octubre de 2026. La captura muestra resultados de conversaciones.",
        "palaz",
        4
      ]
    ]
  ]
];

export function renderSuccessCases({jsx, jsxs}) {
  return jsxs("section", {
    id: "casos-de-exito",
    "aria-labelledby": "success-cases-heading",
    className: "py-20 px-4 bg-card/50",
    style: { scrollMarginTop: "5rem" },
    children: jsxs("div", {
      className: "container mx-auto max-w-6xl space-y-10",
      children: [
        jsx("h2", { id: "success-cases-heading", className: "text-4xl md:text-5xl font-bold text-center text-primary", children: "Casos de éxito" }),
        ...groups.map(([platform, entries]) => jsxs("div", {
          className: "space-y-4",
          children: [
            jsx("h3", { className: "text-2xl font-semibold", children: platform }),
            jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: entries.map(([name, result, objective, work, source, file]) => jsxs("article", {
                className: "rounded-xl border border-border bg-card p-6 flex flex-col gap-4",
                children: [
                  jsx("h4", { className: "text-xl font-semibold", children: name }),
                  jsx("p", { className: "text-lg font-bold text-primary", children: result }),
                  jsxs("p", { className: "text-muted-foreground", children: [jsx("strong", { children: "Objetivo. " }), objective] }),
                  jsxs("p", { className: "text-muted-foreground", children: [jsx("strong", { children: "Qué hice. " }), work] }),
                  jsxs("div", { className: "mt-auto space-y-2", children: [
                    jsx("p", { className: "text-sm text-muted-foreground", children: source }),
                    jsx("a", {
                      className: "inline-flex rounded-md border border-primary px-4 py-2 font-semibold text-primary hover:bg-primary/10",
                      href: new URL("./casos/" + file + ".png", import.meta.url).href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "Ver evidencia de " + name + " (abre en otra pestaña)",
                      children: "Ver evidencia"
                    })
                  ] })
                ]
              }, name))
            })
          ]
        }, platform))
      ]
    })
  });
}
