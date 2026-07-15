import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import Providers from "@/components/Providers";
import { stringifyJsonLd } from "@/lib/jsonld";
import { identityJsonLd, PUBLIC_ROLE, SITE_URL } from "@/lib/person";
import { SanityLive } from "@/lib/sanity/live";
import { sanityReadToken } from "@/sanity/env";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Istiaque Ahamed — Medical Doctor & Healthcare Systems Builder",
    template: "%s · Istiaque Ahamed",
  },
  description:
    `Istiaque Ahamed is a ${PUBLIC_ROLE.toLowerCase()} based between Bangladesh and Australia. Medicine, technology, and the life in between.`,
  authors: [{ name: "Istiaque Ahamed", url: SITE_URL }],
  creator: "Istiaque Ahamed",
  publisher: "Istiaque Ahamed",
  category: "Personal website",
  alternates: {
    canonical: SITE_URL,
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
  openGraph: {
    title: "Istiaque Ahamed — Medicine, technology, and the life in between",
    description: `${PUBLIC_ROLE} based between Bangladesh and Australia.`,
    url: SITE_URL,
    siteName: "Istiaque Ahamed",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Istiaque Ahamed — Medicine, technology, and the life in between",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Istiaque Ahamed — Medicine, technology, and the life in between",
    description: `${PUBLIC_ROLE} based between Bangladesh and Australia.`,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { address: false, email: false, telephone: false },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#080808",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();
  const draftPreviewEnabled = isDraftMode && Boolean(sanityReadToken);

  return (
    <html
      className={`${fraunces.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifyJsonLd(identityJsonLd) }}
        />
        <Providers>{children}</Providers>
        <SanityLive includeDrafts={draftPreviewEnabled} />
        {draftPreviewEnabled ? <VisualEditing /> : null}
      </body>
    </html>
  );
}
