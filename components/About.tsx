"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  animate,
} from "framer-motion";
import { MapPin, MessageSquareText, Boxes, ArrowRight } from "lucide-react";
import { waLink, waMessages, trackWhatsApp } from "@/lib/whatsapp";

/** Contador animado (count-up) respeitando prefers-reduced-motion. */
function CountUp({ to, duration = 1.4 }: { to: number; duration?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return <span ref={ref}>{val}</span>;
}

const HIGHLIGHTS = [
  { icon: MapPin, label: "Loja física em Goiânia (GO)" },
  { icon: MessageSquareText, label: "Atendimento direto, sem robô e sem enrolação" },
  { icon: Boxes, label: "Linha completa pro agro, indústria e construção civil" },
];

export default function About() {
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
    <section id="sobre" className="section bg-brand-navy-900 text-white">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        {/* Texto */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={item} className="eyebrow text-brand-gold">
            Quem está por trás
          </motion.p>
          <motion.div variants={item} className="gold-rule mt-4" />
          <motion.h2
            variants={item}
            className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] font-bold"
          >
            Marca nova. Experiência de quem nunca saiu do ramo.
          </motion.h2>

          <motion.p variants={item} className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/80">
            A Arsenal Mix nasceu em 2026, mas não começou do zero. Quem está à frente passou{" "}
            <strong className="text-white">mais de 13 anos</strong> dentro do mercado de
            borrachas e ferragens, atendendo o agro e a indústria todos os dias — entendendo na
            prática qual peça resolve, qual aguenta o serviço e qual chega na hora.
          </motion.p>
          <motion.p variants={item} className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-white/80">
            É essa bagagem que a gente coloca na sua mão: você não fala com um vendedor que só lê
            catálogo. Fala com quem conhece o produto, a aplicação e o seu tipo de operação.
          </motion.p>

          <motion.a
            variants={item}
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsApp("about")}
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-brand-gold transition-colors hover:text-white"
          >
            Tirar uma dúvida técnica agora
            <ArrowRight size={16} aria-hidden />
          </motion.a>
        </motion.div>

        {/* Placa lateral: stat + destaques */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-card border border-white/15 border-t-2 border-t-brand-gold bg-white/5 p-7"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
            Experiência real
          </p>
          <p className="mt-3 font-display text-[clamp(3.2rem,9vw,4.5rem)] font-bold leading-none text-white">
            +<CountUp to={13} />
            <span className="ml-2 align-middle font-display text-2xl font-bold text-brand-gold">
              anos
            </span>
          </p>
          <p className="mt-1 font-body text-sm text-white/70">
            no mercado de borrachas e ferragens.
          </p>

          <ul className="mt-7 space-y-4 border-t border-white/10 pt-6">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon size={20} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden />
                <span className="font-body text-sm text-white/85">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
