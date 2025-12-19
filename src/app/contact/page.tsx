import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Hamsey | Get Support & Send Feedback",
  description:
    "Have questions or feedback about Hamsey? Contact our support team for assistance or to share your experience with us.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact Hamsey | Get Support & Send Feedback",
    description:
      "Have questions or feedback about Hamsey? Contact our support team for assistance or to share your experience with us.",
    url: "https://hamsey.co/contact",
    images: [{ url: "/image/og-image.png", width: 1200, height: 630, alt: "Contact Hamsey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Hamsey | Get Support & Send Feedback",
    description:
      "Have questions or feedback about Hamsey? Contact our support team for assistance.",
    images: ["/image/og-image.png"],
  },
};

export default function ContactPage() {
  const contactUsSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Hamsey",
    url: "https://hamsey.co/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Hamsey - Neosolve Ventures India Ltd",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7607012157",
        contactType: "customer service",
        email: "support@hamsey.co",
        availableLanguage: ["English", "Hindi"],
      },
      url: "https://hamsey.co",
      sameAs: [
        "https://www.instagram.com/hamsey.connect",
        "https://www.linkedin.com/company/hamsay-proximitydiscovery"
      ],
    },
  } as const;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hamsey.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://hamsey.co/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactUsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="contact-us-container">
        <ContactHeroSection />
        <ContactFormSection />
        <ContactInfoSection />
        <Footer />
      </main>
    </>
  );
}
