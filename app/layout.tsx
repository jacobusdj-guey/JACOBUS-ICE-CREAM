import type { Metadata, Viewport } from "next";
import { Dela_Gothic_One, Rubik_Wet_Paint, Space_Grotesk } from "next/font/google";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { FlavorTicker } from "@/components/layout/FlavorTicker";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const delaGothic = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dela-gothic",
});

const rubikWetPaint = Rubik_Wet_Paint({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik-wet-paint",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Jacobus Ice Cream · Helado artesano de Elda",
    template: "%s · Jacobus Ice Cream",
  },
  description:
    "Heladería artesana en Elda (Alicante). Sabor sin permiso: aquí no se pide perdón, se pide otra bola.",
};

export const viewport: Viewport = {
  themeColor: "#16121a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${delaGothic.variable} ${rubikWetPaint.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <a href="#contenido" className="skip-link label">
          Saltar al contenido
        </a>
        <Header />
        <FlavorTicker />
        <main id="contenido">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
