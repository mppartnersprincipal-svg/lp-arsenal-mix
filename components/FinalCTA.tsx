"use client";

import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, waMessages, trackWhatsApp } from "@/lib/whatsapp";

export default function FinalCTA() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="contato" className="section relative overflow-hidden bg-brand-red-700 text-white">
      {/* Textura/gradiente da marca */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red-700 via-brand-red-700 to-brand-navy-900" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="container relative mx-auto max-w-3xl text-center"
      >
        <motion.div variants={item} className="mx-auto gold-rule" />
        <motion.h2
          variants={item}
          className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold"
        >
          Sua peça está a uma mensagem de distância.
        </motion.h2>
        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-white/85"
        >
          Fala com quem é do ramo, recebe seu orçamento na hora e tira sua operação do
          prejuízo da parada.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex justify-center">
          <a
            href={waLink(waMessages.finalCta)}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsApp("final_cta")}
            className="btn btn-gold px-8 py-4 text-lg"
          >
            <WhatsAppIcon size={22} /> Falar com um especialista agora
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 font-display text-xs uppercase tracking-[0.16em] text-white/70"
        >
          Atendimento rápido · Pronta-entrega · Goiânia e todo o Brasil
        </motion.p>
      </motion.div>
    </section>
  );
}
