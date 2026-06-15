"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Waves,
  Cable,
  Layers,
  Tractor,
  Bolt,
  Hammer,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { waLink, waMessages, trackWhatsApp } from "@/lib/whatsapp";

type Product = {
  code: string;
  titulo: string;
  /** minusculo, casa com waMessages.product() -> "Quero um orcamento de {nome}." */
  nome: string;
  descricao: string;
  icon: LucideIcon;
};

const PRODUCTS: Product[] = [
  {
    code: "AM-01",
    titulo: "Mangueiras",
    nome: "mangueiras",
    descricao:
      "Linha industrial e agrícola para água, ar, sucção, abrasivos e mais. A bitola e a pressão certas pra cada aplicação.",
    icon: Waves,
  },
  {
    code: "AM-02",
    titulo: "Mangotes",
    nome: "mangotes",
    descricao:
      "Mangotes para descarga, sucção e transferência. Resistência pra aguentar o serviço pesado do dia a dia.",
    icon: Cable,
  },
  {
    code: "AM-03",
    titulo: "Borrachas industriais",
    nome: "borrachas industriais",
    descricao:
      "Borrachas técnicas e de vedação para a indústria — perfis, lençóis, juntas e peças sob aplicação.",
    icon: Layers,
  },
  {
    code: "AM-04",
    titulo: "Borrachas agrícolas",
    nome: "borrachas agrícolas",
    descricao:
      "Borrachas e peças pra manter máquina e implemento rodando no campo, sem parada.",
    icon: Tractor,
  },
  {
    code: "AM-05",
    titulo: "Ferragens",
    nome: "ferragens",
    descricao:
      "Ferragens pra fixação, montagem e manutenção. O complemento certo pro seu pedido.",
    icon: Bolt,
  },
  {
    code: "AM-06",
    titulo: "Ferramentas",
    nome: "ferramentas",
    descricao:
      "Ferramentas pra obra, oficina e manutenção. Pra fechar tudo numa compra só.",
    icon: Hammer,
  },
];

export default function Products() {
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
    <section id="produtos" className="section bg-brand-cream">
      <div className="container">
        {/* Cabecalho */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <motion.p variants={item} className="eyebrow">
            O que a gente tem
          </motion.p>
          <motion.div variants={item} className="gold-rule mt-4" />
          <motion.h2
            variants={item}
            className="mt-5 font-display text-[clamp(1.8rem,4vw,3rem)] font-bold text-brand-navy"
          >
            Tudo que sua operação precisa, num lugar só.
          </motion.h2>
          <motion.p variants={item} className="mt-4 font-body text-lg text-steel-600">
            Do agro ao chão de fábrica — linha completa de borrachas, conduções e ferragens
            com pronta-entrega.
          </motion.p>
        </motion.div>

        {/* Grid de cards (ficha tecnica / placa industrial) */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCTS.map((p) => {
            const Icon = p.icon;
            return (
              <motion.li key={p.code} variants={item} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-card border border-steel-300 border-t-2 border-t-brand-gold bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-gold hover:shadow-[0_4px_0_rgba(0,0,0,.18),0_20px_44px_rgba(10,58,87,.22)]">
                  <div className="flex flex-1 flex-col p-6">
                    {/* Linha de cabecalho da placa: codigo mono + carimbo */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-steel-600">
                        <span className="text-brand-red">{p.code}</span> · PEÇA
                      </span>
                      <span className="rounded-full border border-brand-gold/60 px-3 py-1 font-body text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-brand-gold-700 transition-colors duration-200 group-hover:border-brand-gold group-hover:bg-brand-gold/10">
                        Pronta-entrega
                      </span>
                    </div>

                    {/* Icone */}
                    <div className="mt-6 grid h-12 w-12 place-items-center rounded-lg bg-brand-navy/5 text-brand-navy transition-colors duration-200 group-hover:bg-brand-gold/15">
                      <Icon size={26} aria-hidden />
                    </div>

                    {/* Titulo + descricao */}
                    <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">
                      {p.titulo}
                    </h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-steel-600">
                      {p.descricao}
                    </p>

                    {/* CTA por produto */}
                    <a
                      href={waLink(waMessages.product(p.nome))}
                      target="_blank"
                      rel="noopener"
                      onClick={() => trackWhatsApp(`product_${p.nome}`)}
                      aria-label={`Pedir orçamento de ${p.nome} pelo WhatsApp`}
                      className="btn mt-6 w-full border border-steel-300 bg-transparent text-sm text-brand-navy transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy-900"
                    >
                      <MessageCircle size={18} aria-hidden /> Pedir orçamento
                    </a>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* CTA de rodape da secao */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-start gap-4 border-t border-steel-300 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-body text-base text-steel-600">
            Não achou o que procura?{" "}
            <span className="font-medium text-brand-ink">
              Manda no WhatsApp que a gente encontra.
            </span>
          </p>
          <a
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsApp("products_footer")}
            className="btn btn-red shrink-0 text-base"
          >
            <MessageCircle size={20} aria-hidden /> Falar com um especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
