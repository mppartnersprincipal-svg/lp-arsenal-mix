"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  PackageCheck,
  Headset,
  BadgeDollarSign,
  Truck,
  type LucideIcon,
} from "lucide-react";

type Differential = {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
};

const ITEMS: Differential[] = [
  {
    icon: PackageCheck,
    titulo: "Pronta-entrega de verdade",
    descricao:
      "Estoque pra resolver agora. Máquina parada esperando peça é prejuízo — aqui você sai com a solução na mão.",
  },
  {
    icon: Headset,
    titulo: "Quem te atende entende",
    descricao:
      "Mais de 13 anos de mercado falando com você. A gente indica a peça certa pra sua aplicação, não a que sobrou no estoque.",
  },
  {
    icon: BadgeDollarSign,
    titulo: "Preço que fecha conta",
    descricao:
      "Orçamento competitivo e transparente. Bom produto não precisa ser caro pra durar.",
  },
  {
    icon: Truck,
    titulo: "Atende todo o Brasil",
    descricao:
      "Loja física em Goiânia, com frete CIF pra Goiânia e região e transportadora pro resto do país.",
  },
];

export default function Differentials() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="diferenciais" className="section bg-brand-cream">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <motion.p variants={item} className="eyebrow">
            Por que Arsenal Mix
          </motion.p>
          <motion.div variants={item} className="gold-rule mt-4" />
          <motion.h2
            variants={item}
            className="mt-5 font-display text-[clamp(1.8rem,4vw,3rem)] font-bold text-brand-navy"
          >
            Por que comprar com a gente
          </motion.h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ITEMS.map(({ icon: Icon, titulo, descricao }) => (
            <motion.li key={titulo} variants={item} className="h-full">
              <div className="group flex h-full flex-col rounded-card border border-steel-300 border-t-2 border-t-brand-gold bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-gold">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-navy/5 text-brand-navy transition-colors duration-200 group-hover:bg-brand-gold/15">
                  <Icon size={26} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">
                  {titulo}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-steel-600">
                  {descricao}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
