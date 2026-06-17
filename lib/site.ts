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

  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5562994435216",
  whatsappDisplay: "+55 62 99443-5216",
  address: "Av. Porto Salinas, Qd 31 - Lt 9 — Goiânia/GO, 74394-300",
  hours: "Seg a sex, 08h–18h · Sáb e dom fechado",
  instagram: "@arsenal_borrachas",
  instagramUrl: "https://www.instagram.com/arsenal_borrachas/",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=-16.7302775,-49.4010226&z=16&output=embed", // Arsenal Mix Borrachas e Ferragens

  // Tracking (opcional)
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;
