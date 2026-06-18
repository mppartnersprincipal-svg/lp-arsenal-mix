"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waLink, waMessages, trackWhatsApp } from "@/lib/whatsapp";
import Logo from "@/components/Logo";

const NAV = [
  { label: "Produtos", href: "#produtos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Setores", href: "#setores" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy-900/95 backdrop-blur shadow-[0_1px_0_rgba(229,173,26,.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-24">
        {/* Escudo oficial Arsenal Mix */}
        <a href="#topo" aria-label="Arsenal Mix — início">
          <Logo size={48} tone="light" />
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-white/85 transition hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsApp("header")}
            className="btn btn-gold text-sm"
          >
            <WhatsAppIcon size={18} /> Falar agora
          </a>
        </nav>

        {/* Toggle mobile */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav
          className="border-t border-white/10 bg-brand-navy-900 px-5 pb-6 pt-2 md:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 font-body text-white/90"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noopener"
            onClick={() => {
              trackWhatsApp("header_mobile");
              setOpen(false);
            }}
            className="btn btn-gold mt-4 w-full"
          >
            <WhatsAppIcon size={18} /> Falar com um especialista
          </a>
        </nav>
      )}
    </header>
  );
}
