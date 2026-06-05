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

const BASE_URL = "https://lobstertechnologies.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Lobster Technologies — Business Software for Growing Companies",
    template: "%s — Lobster Technologies",
  },
  description:
    "We build custom software that gives growing businesses in Kenya real-time visibility, clean data, and the operational clarity to scale — without the chaos.",
  keywords: [
    "custom software Kenya",
    "business software Nairobi",
    "restaurant management system Kenya",
    "M-Pesa integration",
    "multi-branch operations software",
    "custom software development Nairobi",
    "operations management software",
  ],
  authors: [{ name: "Lobster Technologies", url: BASE_URL }],
  creator: "Lobster Technologies",
  publisher: "Lobster Technologies",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Lobster Technologies — Business Software for Growing Companies",
    description:
      "Custom software for scaling businesses in Kenya. Built for how this market actually works — M-Pesa, multi-branch, real-time data.",
    type: "website",
    locale: "en_KE",
    url: BASE_URL,
    siteName: "Lobster Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lobster Technologies — Business Software for Growing Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lobster Technologies — Business Software for Growing Companies",
    description:
      "Custom software for scaling businesses in Kenya. Built for how this market actually works.",
    images: ["/og-image.png"],
    creator: "@lobstertech",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/LT-Structural_L_monogram-removebg.png", type: "image/png" },
    ],
    shortcut: "/LT-Structural_L_monogram-removebg.png",
    apple: "/LT-Structural_L_monogram-removebg.png",
  },
  verification: {
    google: "QVbzZ8AWz7elkcbqL5eTQA1fvrOCUKkoN7tBsKZ6xvg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      name: "Lobster Technologies",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/LT-Primary_horizontal_logo-removebg.png`,
      },
      image: `${BASE_URL}/og-image.png`,
      description:
        "Custom software development company in Nairobi, Kenya. We build operations management software, restaurant management systems, and business analytics tools for growing companies.",
      email: "lobster.technologies.africa@gmail.com",
      telephone: "+254113176613",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi County",
        addressCountry: "KE",
      },
      areaServed: {
        "@type": "Country",
        name: "Kenya",
      },
      founder: {
        "@type": "Person",
        "@id": `${BASE_URL}/about#founder`,
        name: "Edwinfred Kamau",
        jobTitle: "Founder & CEO",
        worksFor: { "@id": `${BASE_URL}/#organization` },
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Lobster Technologies",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-KE",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-KE"
      className={`${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
