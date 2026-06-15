import Image from "next/image";

type LogoProps = {
  /** Altura do escudo em px. Header ~38, Footer ~56. */
  size?: number;
  /** Cor do wordmark — branco em fundos escuros (padrao), navy em fundos claros. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Escudo oficial Arsenal Mix + wordmark.
 * Asset: /public/arsenal-mix-crest.png (copiado do Design System).
 */
export default function Logo({ size = 38, tone = "light", className = "" }: LogoProps) {
  const wordmark = tone === "light" ? "text-white" : "text-brand-navy";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/arsenal-mix-crest.png"
        alt="Arsenal Mix"
        width={size}
        height={size}
        priority
        className="h-auto w-auto"
        style={{ height: size, width: "auto" }}
      />
      <span
        className={`font-display font-bold leading-none tracking-tight ${wordmark}`}
        style={{ fontSize: size * 0.46 }}
      >
        ARSENAL<span className="text-brand-gold"> MIX</span>
      </span>
    </span>
  );
}
