"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { waLink, waMessages, trackWhatsApp } from "@/lib/whatsapp";

const STEPS = [
  {
    n: "01",
    titulo: "Chama no WhatsApp",
    descricao:
      "Manda o que você precisa — pode ser por foto, modelo ou descrição. Não precisa saber o nome técnico.",
  },
  {
    n: "02",
    titulo: "A gente monta seu orçamento",
    descricao:
      "Um especialista confere a aplicação, indica a peça certa e te passa o preço na hora.",
  },
  {
    n: "03",
    titulo: "Recebe rápido",
    descricao:
      "Retira na loja em Goiânia ou recebe onde estiver, pelo Brasil todo.",
  },
];

export default function HowItWorks() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="como-funciona" className="section bg-brand-cream">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <motion.p variants={item} className="eyebrow">
            Simples assim
          </motion.p>
          <motion.div variants={item} className="gold-rule mt-4" />
          <motion.h2
            variants={item}
            className="mt-5 font-display text-[clamp(1.8rem,4vw,3rem)] font-bold text-brand-navy"
          >
            Do “preciso disso” ao pedido fechado em 3 passos
          </motion.h2>
        </motion.div>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {STEPS.map((s) => (
            <motion.li key={s.n} variants={item} className="relative">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[clamp(2.6rem,7vw,3.5rem)] font-bold leading-none text-brand-gold">
                  {s.n}
                </span>
                <span className="h-[2px] flex-1 bg-steel-300" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-brand-navy">
                {s.titulo}
              </h3>
              <p className="mt-2 font-body text-base leading-relaxed text-steel-600">
                {s.descricao}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <a
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsApp("how_it_works")}
            className="btn btn-red text-base"
          >
            <MessageCircle size={20} aria-hidden /> Começar agora pelo WhatsApp
            <ArrowRight size={18} aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
