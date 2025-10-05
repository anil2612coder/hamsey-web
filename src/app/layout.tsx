import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
// Playwrite AU SA is available as next/font: Playwrite_AU_SA
// eslint-disable-next-line camelcase
import { Playwrite_AU_SA } from "next/font/google";
import "./globals.css";
import AnimationInitializer from "@/components/AnimationInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hamsey - Connect with People Nearby",
    template: "%s | Hamsey",
  },
  description:
    "Hamsey helps you connect with people nearby safely and securely. Never miss a chance to meet someone special with our innovative dating app.",
  metadataBase: new URL("https://hamsey.co"),
  openGraph: {
    type: "website",
    title: "Hamsey - Connect with People Nearby",
    description:
      "Hamsey helps you connect with people nearby safely and securely.",
    url: "https://hamsey.co/",
    images: [{ url: "/image/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamsey - Connect with People Nearby",
    description:
      "Hamsey helps you connect with people nearby safely and securely.",
    images: ["/image/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${playwrite.variable} antialiased`}
      >
        <AnimationInitializer />
        {children}
      </body>
    </html>
  );
}
