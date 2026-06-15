"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Wheat, Factory, HardHat, type LucideIcon } from "lucide-react";

type Segment = {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
};

const SEGMENTS: Segment[] = [
  {
    icon: Wheat,
    titulo: "Agro e agropecuária",
    descricao:
      "Produtor, fazenda, revenda e manutenção de máquina e implemento. Pronta-entrega pra não perder janela de serviço.",
  },
  {
    icon: Factory,
    titulo: "Indústria",
    descricao:
      "Manutenção industrial, vedação, condução de fluidos e reposição. A peça técnica certa pra linha não parar.",
  },
  {
    icon: HardHat,
    titulo: "Construção civil",
    descricao:
      "Obra e canteiro abastecidos com mangueiras, ferragens e ferramentas, com agilidade no fornecimento.",
  },
];

export default function Segments() {
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
    <section id="setores" className="section bg-brand-navy text-white">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <motion.p variants={item} className="eyebrow text-brand-gold">
            Feito pro seu setor
          </motion.p>
          <motion.div variants={item} className="gold-rule mt-4" />
          <motion.h2
            variants={item}
            className="mt-5 font-display text-[clamp(1.8rem,4vw,3rem)] font-bold"
          >
            Se a sua operação não pode parar, é com a gente.
          </motion.h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {SEGMENTS.map(({ icon: Icon, titulo, descricao }) => (
            <motion.li key={titulo} variants={item} className="h-full">
              <div className="group flex h-full flex-col rounded-card border border-white/15 border-t-2 border-t-brand-gold bg-white/5 p-7 transition-colors duration-200 hover:bg-white/[0.08]">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-gold/15 text-brand-gold">
                  <Icon size={26} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{titulo}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/75">
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
