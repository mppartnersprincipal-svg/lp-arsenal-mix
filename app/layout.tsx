import type { Metadata, Viewport } from "next";
import { Oswald, Barlow } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";

// Google Tag Manager — ID configuravel via env, com fallback para o container da Arsenal Mix.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-NWG4XZ9K";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
