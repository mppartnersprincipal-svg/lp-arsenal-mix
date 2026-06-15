"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

/**
 * IMPORTANTE: depoimentos abaixo sao MODELOS (COPY §8).
 * Substituir por depoimentos reais coletados — manter anonimo por setor
 * (regra do cliente: nao expor nomes/logos de empresas atendidas).
 */
const TESTIMONIALS = [
  {
    quote:
      "Precisava de mangote com urgência pra não parar a colheita. Resolveram na hora e o preço fechou. Virei cliente.",
    autor: "Cliente do setor agro · Goiás",
  },
  {
    quote:
      "O bom é falar com quem entende. Mandei a foto da peça e já veio a indicação certa. Sem perder tempo.",
    autor: "Manutenção industrial · Goiânia/GO",
  },
  {
    quote:
      "Atendimento direto e entrega rápida. Resolvi tudo pelo WhatsApp.",
    autor: "Construção civil · Goiás",
  },
];

const SELOS = [
  "Pronta-entrega",
  "Atendimento especializado",
  "Entrega pra todo o Brasil",
  "Loja física em Goiânia",
];

export default function SocialProof() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="depoimentos" className="section bg-brand-navy-900 text-white">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <motion.p variants={item} className="eyebrow text-brand-gold">
            Quem já compra com a gente
          </motion.p>
          <motion.div variants={item} className="gold-rule mt-4" />
          <motion.h2
            variants={item}
            className="mt-5 font-display text-[clamp(1.8rem,4vw,3rem)] font-bold"
          >
            Confiança de quem move o agro e a indústria
          </motion.h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.li key={t.autor} variants={item} className="h-full">
              <figure className="flex h-full flex-col rounded-card border border-white/15 border-t-2 border-t-brand-gold bg-white/5 p-7">
                <Quote size={28} className="text-brand-gold" aria-hidden />
                <blockquote className="mt-4 flex-1 font-body text-base leading-relaxed text-white/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.1em] text-brand-gold">
                  {t.autor}
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>

        {/* Faixa de selos */}
        <motion.ul
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-7"
        >
          {SELOS.map((selo) => (
            <li
              key={selo}
              className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-white/70"
            >
              <span className="mr-3 text-brand-gold" aria-hidden>
                ◆
              </span>
              {selo}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
