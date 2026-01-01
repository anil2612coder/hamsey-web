import type { Metadata } from "next";
import Script from "next/script";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Figtree ,
  Poppins,
  Playwrite_AU_SA,
} from "next/font/google";
import "./globals.css";
import AnimationInitializer from "@/components/AnimationInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const playwrite = Playwrite_AU_SA({
  variable: "--font-playwrite",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hamsey - Connect with People Nearby",
    template: "%s | Hamsey",
  },
  description:
    "Hamsey helps you connect with people nearby safely and securely. Never miss a chance to meet someone special with our innovative proximity-based social networking app.",
  metadataBase: new URL("https://hamsey.co"),
  keywords: [
    "Hamsey",
    "proximity social network",
    "connect nearby",
    "social networking app",
    "meet people nearby",
    "local connections",
    "safe social networking",
  ],
  authors: [{ name: "Hamsey - Neosolve Ventures India Ltd" }],
  creator: "Hamsey",
  publisher: "Hamsey - Neosolve Ventures India Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hamsey",
    title: "Hamsey - Connect with People Nearby",
    description:
      "Hamsey helps you connect with people nearby safely and securely.",
    url: "https://hamsey.co/",
    images: [{ url: "/image/og-image.png", width: 1200, height: 630, alt: "Hamsey - From glance to hello, made easy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamsey - Connect with People Nearby",
    description:
      "Hamsey helps you connect with people nearby safely and securely.",
    images: ["/image/og-image.png"],
    creator: "@hamseyapp",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "theme-color": "#D91C4B",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${figtree.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${playwrite.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SPX7B99M07"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SPX7B99M07');
          `}
        </Script>
        <AnimationInitializer />
        {children}
      </body>
    </html>
  );
}
