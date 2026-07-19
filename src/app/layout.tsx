import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ShowroomProvider } from "@/context/ShowroomContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { FavoritesDrawer } from "@/components/layout/FavoritesDrawer";
import { ComparisonTray } from "@/components/layout/ComparisonTray";
import { ContactModal } from "@/components/interactive/ContactModal";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-custom",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-custom",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Monteiro Textiles | South India's Premier Luxury Fabric Showroom in Mangalore",
    template: "%s | Monteiro Textiles Mangalore",
  },
  description:
    "Experience South India's most exclusive textile showroom in Hampankatta, Mangalore. Discover bespoke Italian suitings, Sea Island cottons, pure linens, and wedding silks from Loro Piana, Zegna, and Scabal with personalized styling consultations.",
  keywords: [
    "Monteiro Textiles Mangalore",
    "Premium Textile Store Mangalore",
    "Suiting and Shirting Mangalore",
    "Wedding Fabrics Mangalore",
    "Textile Shop Hampankatta",
    "Luxury Fabrics Mangalore",
    "Bespoke Tailoring Mangalore",
    "Italian Suitings South India",
    "Loro Piana Mangalore",
    "Zegna Fabrics Karnataka",
  ],
  authors: [{ name: "Monteiro Textiles Flagship Store Hampankatta" }],
  creator: "Monteiro Textiles",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://monteirotextiles.com",
    title: "Monteiro Textiles | Luxury Fabric Showroom Hampankatta Mangalore",
    description:
      "Step into South India's premier destination for luxury suiting, shirting, and wedding textiles. Visit our showroom and meet with our master tailoring partners.",
    siteName: "Monteiro Textiles",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Monteiro Textiles Luxury Showroom Hampankatta Mangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monteiro Textiles | Luxury Suiting & Wedding Fabrics Mangalore",
    description:
      "Explore Italian Super 180s wool, Egyptian Giza cottons, and royal wedding brocades at Monteiro Textiles, Hampankatta, Mangalore.",
    images: ["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"],
  },
  alternates: {
    canonical: "https://monteirotextiles.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} antialiased scroll-smooth`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="min-h-screen flex flex-col bg-cashmere text-obsidian font-sans selection:bg-gold selection:text-obsidian">
        <ShowroomProvider>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <FavoritesDrawer />
          <ComparisonTray />
          <ContactModal />
        </ShowroomProvider>
      </body>
    </html>
  );
}
