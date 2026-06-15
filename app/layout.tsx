import type { Metadata, Viewport } from "next";
import { Oswald, Barlow } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arsenal Mix | Borrachas, Mangueiras e Ferragens — Goiânia e todo o Brasil",
  description:
    "Mangueiras, mangotes, borrachas industriais e agrícolas, ferragens e ferramentas com pronta-entrega e preço competitivo. Atendimento de quem é do ramo há mais de 13 anos. Loja física em Goiânia, entrega pra todo o Brasil.",
  keywords: [
    "borrachas", "mangueiras", "mangotes", "ferragens", "ferramentas",
    "borracha industrial", "borracha agrícola", "Goiânia", "agro", "indústria",
  ],
  openGraph: {
    title: "Arsenal Mix | Borrachas, Mangueiras e Ferragens",
    description:
      "Pronta-entrega, preço competitivo e atendimento técnico pro agro e a indústria. Goiânia e todo o Brasil.",
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    // images: ["/og.jpg"], // TODO: imagem de compartilhamento da marca
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#022335",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.legalName,
  description: site.tagline,
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  // telephone: "+55...", // TODO
  // url: "https://...",  // TODO dominio
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${oswald.variable} ${barlow.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
