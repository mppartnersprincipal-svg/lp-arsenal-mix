"use client";

import { MapPin, Clock, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waLink, waMessages, trackWhatsApp } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import Logo from "@/components/Logo";

const SHORTCUTS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Para quem atendemos", href: "#setores" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-white border-t-[3px] border-brand-red">
      {/* pb extra no mobile pra nao ficar atras da barra fixa do WhatsApp */}
      <div className="container grid gap-10 pb-28 pt-16 md:grid-cols-3 md:pb-16">
        {/* Coluna 1 — Marca */}
        <div>
          <a href="#topo" aria-label="Arsenal Mix — início">
            <Logo size={56} tone="light" />
          </a>
          <p className="mt-4 font-body text-sm font-semibold text-white/90">
            {site.legalName}
          </p>
          <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-white/65">
            {site.tagline}
          </p>
        </div>

        {/* Coluna 2 — Contato */}
        <div>
          <p className="eyebrow text-brand-gold">Contato</p>
          <div className="gold-rule mt-3" />
          <ul className="mt-5 space-y-3 font-body text-sm text-white/80">
            <li>
              <a
                href={waLink(waMessages.floating)}
                target="_blank"
                rel="noopener"
                onClick={() => trackWhatsApp("footer")}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-gold"
              >
                <WhatsAppIcon size={18} className="shrink-0 text-brand-gold" />
                WhatsApp: {site.whatsappNumber}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden />
              {site.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={18} className="shrink-0 text-brand-gold" aria-hidden />
              Horário: {site.hours}
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-gold"
              >
                <Instagram size={18} className="shrink-0 text-brand-gold" aria-hidden />
                Instagram: {site.instagram}
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 — Atalhos */}
        <div>
          <p className="eyebrow text-brand-gold">Atalhos</p>
          <div className="gold-rule mt-3" />
          <ul className="mt-5 space-y-3 font-body text-sm text-white/80">
            {SHORTCUTS.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="transition-colors hover:text-brand-gold">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={waLink(waMessages.floating)}
                target="_blank"
                rel="noopener"
                onClick={() => trackWhatsApp("footer_shortcut")}
                className="font-semibold text-brand-gold transition-colors hover:text-white"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>

          {/* Mapa: renderiza so quando houver embed configurado (lib/site.ts) */}
          {site.mapsEmbedUrl ? (
            <div className="mt-6 overflow-hidden rounded-card border border-white/15">
              <iframe
                src={site.mapsEmbedUrl}
                title="Localização da loja Arsenal Mix em Goiânia"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-44 w-full"
              />
            </div>
          ) : (
            <p className="mt-6 rounded-card border border-dashed border-white/20 p-3 font-display text-[0.7rem] uppercase tracking-[0.12em] text-white/40">
              Mapa: configurar LINK_GOOGLE_MAPS em lib/site.ts
            </p>
          )}
        </div>
      </div>

      {/* Linha legal */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <p className="font-body text-xs text-white/55">
            © 2026 Arsenal Mix. Todos os direitos reservados. · Desenvolvido por M|P
            Assessoria.
          </p>
        </div>
      </div>
    </footer>
  );
}
