"use client";

import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, waMessages, trackWhatsApp } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop: pill flutuante no canto */}
      <a
        href={waLink(waMessages.floating)}
        target="_blank"
        rel="noopener"
        onClick={() => trackWhatsApp("floating_desktop")}
        aria-label="Falar com um especialista no WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-whatsapp px-5 py-3.5 font-body font-bold text-white shadow-[0_10px_30px_rgba(37,211,102,.4)] transition hover:scale-[1.03] md:inline-flex"
      >
        <WhatsAppIcon size={22} />
        Fale com um especialista
      </a>

      {/* Mobile: barra fixa inferior de largura total */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-brand-cream/95 p-3 backdrop-blur md:hidden">
        <a
          href={waLink(waMessages.floating)}
          target="_blank"
          rel="noopener"
          onClick={() => trackWhatsApp("floating_mobile")}
          className="btn w-full bg-whatsapp text-white"
        >
          <WhatsAppIcon size={20} /> Falar no WhatsApp
        </a>
      </div>
    </>
  );
}
