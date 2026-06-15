import { site } from "./site";

/**
 * Monta o link do WhatsApp com mensagem pre-preenchida.
 * Uso: waLink("Quero um orcamento de mangueiras.")
 */
export function waLink(message: string): string {
  const num = site.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

/** Mensagens padrao por contexto (facilita rastrear origem do lead). */
export const waMessages = {
  hero: "Olá! Vim pelo site da Arsenal Mix e quero falar com um especialista.",
  floating: "Olá! Vim pelo site da Arsenal Mix e quero um orçamento.",
  finalCta: "Olá! Quero falar com um especialista da Arsenal Mix.",
  product: (nome: string) => `Quero um orçamento de ${nome}.`,
} as const;

/**
 * Dispara evento de conversao (Meta Pixel + GA4) ao clicar no WhatsApp.
 * Chamar no onClick dos links de WhatsApp: onClick={() => trackWhatsApp("hero")}
 */
export function trackWhatsApp(origin: string): void {
  if (typeof window === "undefined") return;
  // Meta Pixel
  const fbq = (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq;
  if (typeof fbq === "function") {
    fbq("track", "Contact", { content_name: origin });
  }
  // GA4
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "click_whatsapp", { origin });
  }
}
