"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowDown, ShieldCheck, Truck, Clock, BadgeDollarSign } from "lucide-react";
import { waLink, waMessages, trackWhatsApp } from "@/lib/whatsapp";

const TRUST = [
  { icon: Clock, label: "Pronta-entrega" },
  { icon: ShieldCheck, label: "+13 anos de mercado" },
  { icon: Truck, label: "Todo o Brasil" },
  { icon: BadgeDollarSign, label: "Preço competitivo" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yShield = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.15]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="topo"
      ref={ref}
      className="relative overflow-hidden bg-brand-navy-900 text-white"
    >
      {/* Camada decorativa: navy + textura de pontos + escudo em parallax */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900 via-brand-navy-900 to-brand-navy" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        {/* halo dourado atras do escudo */}
        <div
          className="absolute right-0 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 translate-x-1/4 rounded-full md:block"
          style={{
            background:
              "radial-gradient(circle, rgba(229,173,26,0.18), transparent 65%)",
          }}
          aria-hidden
        />
        <motion.div
          style={{ y: yShield, opacity }}
          className="absolute -right-16 top-1/2 hidden -translate-y-1/2 md:block"
          aria-hidden
        >
          {/* Escudo oficial em marca d'agua */}
          <img
            src="/arsenal-mix-crest.png"
            alt=""
            className="w-[460px] max-w-none opacity-[0.12]"
            style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.45))" }}
          />
        </motion.div>
      </div>

      <div className="container relative grid min-h-[88vh] items-center pt-24 pb-16 md:min-h-[92vh]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p variants={item} className="eyebrow text-brand-gold">
            Borrachas · Mangueiras · Mangotes · Ferragens · Ferramentas
          </motion.p>

          <motion.div variants={item} className="gold-rule mt-5" />

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.4rem,6.2vw,4.6rem)] font-bold leading-[1.0]"
          >
            A peça certa, na hora certa —{" "}
            <span className="text-brand-gold">pra sua operação não parar.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl font-body text-lg leading-relaxed text-white/80"
          >
            Mangueiras, mangotes, borrachas industriais e agrícolas, ferragens e
            ferramentas com <strong className="text-white">pronta-entrega</strong>,{" "}
            <strong className="text-white">preço competitivo</strong> e atendimento de
            quem é do ramo há mais de <strong className="text-white">13 anos</strong>.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(waMessages.hero)}
              target="_blank"
              rel="noopener"
              onClick={() => trackWhatsApp("hero")}
              className="btn btn-gold text-base"
            >
              <MessageCircle size={20} /> Falar com um especialista
            </a>
            <a href="#produtos" className="btn btn-ghost text-base">
              Ver o que temos <ArrowDown size={18} />
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-5 font-body text-sm text-white/55">
            Resposta rápida no WhatsApp · Atendemos todo o Brasil
          </motion.p>
        </motion.div>
      </div>

      {/* Barra de confianca */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="container grid grid-cols-2 gap-x-6 gap-y-4 py-5 md:grid-cols-4">
          {TRUST.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={20} className="shrink-0 text-brand-gold" />
              <span className="font-body text-sm font-medium text-white/90">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
