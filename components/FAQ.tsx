"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Pergunta 6 (forma de pagamento): a copy traz uma instrucao p/ o dev entre
 * parenteses — "(Confirmar formas de pagamento com o cliente antes de publicar.)".
 * Isso NAO vai pro visitante; exibimos so a resposta. Confirmar antes do lancamento.
 */
const FAQS = [
  {
    q: "Vocês têm o produto em estoque?",
    a: "Trabalhamos com pronta-entrega na maior parte da linha. Manda o que você precisa no WhatsApp que confirmamos a disponibilidade na hora.",
  },
  {
    q: "Atendem fora de Goiânia?",
    a: "Sim. Temos loja física em Goiânia, com frete CIF pra Goiânia e região, e enviamos pra todo o Brasil por transportadora.",
  },
  {
    q: "Não sei o nome técnico da peça. Tem problema?",
    a: "Nenhum. Manda foto, manda o modelo da máquina ou descreve o uso. Quem te atende é do ramo e identifica a peça certa.",
  },
  {
    q: "Como peço um orçamento?",
    a: "Pelo WhatsApp, direto com um especialista. Você descreve a necessidade e recebe o preço na hora.",
  },
  {
    q: "Vocês atendem só agro?",
    a: "Não. Atendemos agro, indústria e construção civil — da fazenda ao chão de fábrica e ao canteiro de obra.",
  },
  {
    q: "Qual a forma de pagamento?",
    a: "Combinamos as condições direto no atendimento.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduce = useReducedMotion();
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div className="border-b border-steel-300">
      <h3>
        <button
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-display text-lg font-semibold normal-case text-brand-navy">{q}</span>
          <ChevronDown
            size={22}
            aria-hidden
            className={`shrink-0 text-brand-red transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 font-body text-base leading-relaxed text-steel-600">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-brand-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <p className="eyebrow">Dúvidas frequentes</p>
          <div className="gold-rule mt-4" />
          <h2 className="mt-5 font-display text-[clamp(1.8rem,4vw,3rem)] font-bold text-brand-navy">
            Antes de chamar, talvez você queira saber
          </h2>

          <div className="mt-10 border-t border-steel-300">
            {FAQS.map((f, i) => (
              <FaqItem
                key={f.q}
                index={i}
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
