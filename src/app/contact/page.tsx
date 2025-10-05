import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Hamsey | Get Support & Send Feedback",
  description:
    "Have questions or feedback about Hamsey dating app? Contact our support team for assistance or to share your experience with us.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact Hamsey | Get Support & Send Feedback",
    description:
      "Have questions or feedback about Hamsey dating app? Contact our support team for assistance or to share your experience with us.",
    url: "https://hamsey.co/contact",
    images: [{ url: "/image/logo.png" }],
  },
};

export default function ContactPage() {
  const contactUsSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Hamsey Dating App",
    url: "https://hamsey.co/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Hamsey Dating App",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-800-123-4567",
        contactType: "customer service",
        email: "support@hamseyapp.com",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Dating Street",
        addressLocality: "App City",
        addressRegion: "CA",
        postalCode: "90210",
        addressCountry: "US",
      },
    },
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactUsSchema) }}
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
