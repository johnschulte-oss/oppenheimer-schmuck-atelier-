import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.schmuck-friedberg.de"),
  title: {
    default: "Oppenheimer Schmuck-Atelier | Juwelier in Friedberg (Hessen)",
    template: "%s | Oppenheimer Schmuck-Atelier",
  },
  description:
    "Trauringe, Verlobungsringe, Schmuck und Seiko-Uhren in Friedberg. Goldankauf mit RFA-Prüfung, eigene Schmuck- und Uhrenwerkstatt. Im Geburtshaus von Sir Ernest Oppenheimer.",
  keywords: [
    "Juwelier Friedberg",
    "Trauringe Friedberg",
    "Verlobungsringe Friedberg",
    "Goldankauf Friedberg",
    "Seiko Friedberg",
    "Uhrenreparatur Friedberg",
    "Oppenheimer Schmuck-Atelier",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Oppenheimer Schmuck-Atelier",
    title: "Oppenheimer Schmuck-Atelier | Juwelier in Friedberg",
    description:
      "Trauringe, Verlobungsringe, Schmuck, Seiko-Uhren, Ankauf und Service. Im Geburtshaus von Sir Ernest Oppenheimer.",
    images: ["/images/rubin/rubin_aboutRubin_manufacture_woman_with_ring.webp"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans font-light antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
