/**
 * Configuracao central do site. Preencher com os dados reais do cliente.
 * (endereco / horario / redes: puxar do Perfil da Empresa no Google)
 */
export const site = {
  name: "Arsenal Mix",
  legalName: "Arsenal Mix — Comércio de Borrachas e Ferragens",
  tagline: "Borrachas, mangueiras, mangotes, ferragens e ferramentas pro agro e a indústria.",
  city: "Goiânia",
  state: "GO",

  // [PREENCHER]
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5562000000000",
  address: "[ENDERECO_COMPLETO] — Goiânia/GO",
  hours: "[HORARIO]",
  instagram: "[@INSTAGRAM]",
  instagramUrl: "https://instagram.com/",
  mapsEmbedUrl: "", // [LINK_GOOGLE_MAPS embed]

  // Tracking (opcional)
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;
