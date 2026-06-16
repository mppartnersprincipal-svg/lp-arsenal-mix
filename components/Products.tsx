"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, waMessages, trackWhatsApp } from "@/lib/whatsapp";

type Product = {
  code: string;
  titulo: string;
  /** minusculo, casa com waMessages.product() -> "Quero um orcamento de {nome}." */
  nome: string;
  descricao: string;
  /** caminho da foto em /public/produtos */
  img: string;
  /** texto alternativo da foto */
  alt: string;
};

const PRODUCTS: Product[] = [
  {
    code: "AM-01",
    titulo: "Mangueiras e mangotes",
    nome: "mangueiras e mangotes",
    descricao:
      "Linha industrial e agrícola para água, ar, sucção, descarga e abrasivos. A bitola e a pressão certas pra cada aplicação.",
    img: "/produtos/mangueiras-mangotes.jpeg",
    alt: "Mangueiras industriais e agrícolas coloridas da Arsenal Mix",
  },
  {
    code: "AM-02",
    titulo: "Lençóis e mantas de borracha",
    nome: "lençóis e mantas de borracha",
    descricao:
      "Lençóis e mantas lisas e antiderrapantes pra vedação, revestimento e proteção de superfícies.",
    img: "/produtos/lencois-mantas.jpeg",
    alt: "Rolo de manta de borracha antiderrapante",
  },
  {
    code: "AM-03",
    titulo: "Guarnições e vedações",
    nome: "guarnições e vedações",
    descricao:
      "Perfis, guarnições e acabamentos de borracha pra vedar portas, esquadrias e equipamentos sem folga.",
    img: "/produtos/guarnicoes-vedacoes.jpeg",
    alt: "Perfis e guarnições de borracha para vedação",
  },
  {
    code: "AM-04",
    titulo: "Borrachão para cocho",
    nome: "borrachão para cocho",
    descricao:
      "Borracha resistente pra revestimento de cocho — aguenta o uso pesado do dia a dia no campo.",
    img: "/produtos/borrachao-cocho.jpeg",
    alt: "Rolos de borrachão para revestimento de cocho",
  },
  {
    code: "AM-05",
    titulo: "Conexões de ferro e alumínio",
    nome: "conexões de ferro e alumínio",
    descricao:
      "Engates rápidos e conexões em ferro fundido e alumínio pra montar e transferir com segurança.",
    img: "/produtos/conexoes.jpeg",
    alt: "Conexões e engates rápidos em alumínio",
  },
  {
    code: "AM-06",
    titulo: "Abraçadeiras",
    nome: "abraçadeiras",
    descricao:
      "Abraçadeiras de diversos tipos e medidas pra fixar mangueiras e conduções com firmeza.",
    img: "/produtos/abracadeiras.jpeg",
    alt: "Abraçadeiras metálicas de vários modelos",
  },
  {
    code: "AM-07",
    titulo: "Correias industriais",
    nome: "correias industriais",
    descricao:
      "Correias em V e de transmissão pra manter máquina e implemento rodando sem parada.",
    img: "/produtos/correias.jpeg",
    alt: "Correias industriais em V",
  },
  {
    code: "AM-08",
    titulo: "Rolamentos e mancais",
    nome: "rolamentos e mancais",
    descricao:
      "Rolamentos e mancais pra agro e indústria — a peça certa pra cada eixo e aplicação.",
    img: "/produtos/rolamentos-mancais.jpeg",
    alt: "Rolamentos e mancais de diferentes tipos",
  },
  {
    code: "AM-09",
    titulo: "Rodas e rodízios",
    nome: "rodas e rodízios",
    descricao:
      "Rodas e rodízios pra carrinhos, máquinas e movimentação interna. Capacidade pra cada carga.",
    img: "/produtos/rodas-rodizios.jpeg",
    alt: "Rodas e rodízios industriais variados",
  },
  {
    code: "AM-10",
    titulo: "Lonas agrícolas e industriais",
    nome: "lonas agrícolas e industriais",
    descricao:
      "Lonas resistentes pra cobertura, proteção e armazenagem no campo e na indústria.",
    img: "/produtos/lonas.jpeg",
    alt: "Lona agrícola dobrada e em uso",
  },
  {
    code: "AM-11",
    titulo: "Capachos e tapetes",
    nome: "capachos e tapetes",
    descricao:
      "Capachos e tapetes lisos ou personalizados pra entrada, área de serviço e ambientes de trabalho.",
    img: "/produtos/capachos-tapetes.jpeg",
    alt: "Rolos de capachos e tapetes em várias cores",
  },
  {
    code: "AM-12",
    titulo: "Piso ecológico",
    nome: "piso ecológico",
    descricao:
      "Piso de borracha pra academia e playground — amortecimento e segurança pra área de treino e lazer.",
    img: "/produtos/piso-ecologico.jpeg",
    alt: "Piso ecológico de borracha em academia",
  },
  {
    code: "AM-13",
    titulo: "EVA para usos diversos",
    nome: "eva",
    descricao:
      "Placas e rolos de EVA em várias cores e espessuras pra revestimento, isolamento e aplicações diversas.",
    img: "/produtos/eva.jpeg",
    alt: "Rolos de EVA coloridos",
  },
  {
    code: "AM-14",
    titulo: "Ferragens e ferramentas",
    nome: "ferragens e ferramentas",
    descricao:
      "Ferragens e ferramentas pra obra, oficina e manutenção. Pra fechar tudo numa compra só.",
    img: "/produtos/ferragens-ferramentas.jpeg",
    alt: "Kit de ferramentas e ferragens diversas",
  },
];

export default function Products() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.05 } },
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
            Do agro ao chão de fábrica — catálogo completo por categoria, de borrachas e
            conduções a ferragens, com pronta-entrega.
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
          {PRODUCTS.map((p) => (
            <motion.li key={p.code} variants={item} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-card border border-steel-300 border-t-2 border-t-brand-gold bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-gold hover:shadow-[0_4px_0_rgba(0,0,0,.18),0_20px_44px_rgba(10,58,87,.22)]">
                {/* Foto do produto */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy/5">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  />
                </div>

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
                    <WhatsAppIcon size={18} /> Pedir orçamento
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
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
            <WhatsAppIcon size={20} /> Falar com um especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
