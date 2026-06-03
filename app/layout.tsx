import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lobster Technologies — Business Software for Growing Companies",
  description:
    "We build custom software that gives growing businesses in Kenya real-time visibility, clean data, and the operational clarity to scale — without the chaos.",
  keywords: ["custom software", "Kenya", "Nairobi", "business software", "restaurant management", "M-Pesa", "operations"],
  authors: [{ name: "Lobster Technologies" }],
  openGraph: {
    title: "Lobster Technologies — Business Software for Growing Companies",
    description:
      "Custom software for scaling businesses in Kenya. Built for how this market actually works.",
    type: "website",
    locale: "en_KE",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
