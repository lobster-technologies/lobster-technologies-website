import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofia — Your AI Sales Agent",
  description:
    "Sofia is an AI sales agent for African e-commerce businesses. She responds to your customers on WhatsApp and Instagram — instantly, 24/7.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Sofia — Your AI Sales Agent",
    description:
      "Sofia is an AI sales agent for African e-commerce businesses. She responds to your customers on WhatsApp and Instagram — instantly, 24/7.",
    type: "website",
    images: ["/sofia-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Satoshi — Fontshare */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
        {/* Instrument Serif — Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&display=swap"
        />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{
          backgroundColor: "#FCFCFA",
          color: "#1A1A1B",
          fontFamily: "Satoshi, system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
