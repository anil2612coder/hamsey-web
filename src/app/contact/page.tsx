import SEOMetaTags from "@/components/common/SEOMetaTags";
import Navigation from "@/components/common/Navigation";

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
      <SEOMetaTags
        title="Contact Hamsey | Get Support & Send Feedback"
        description="Have questions or feedback about Hamsey dating app? Contact our support team for assistance or to share your experience with us."
        keywords="contact Hamsey, dating app support, Hamsey help, dating app feedback, contact dating app"
        canonicalUrl="https://hamsey.co/contact"
        schema={contactUsSchema as unknown as Record<string, unknown>}
      />
      <main className="contact-us-container">
        <Navigation />
        <section className="contact-hero-container">
          <div className="contact-hero-wrapper">
            <div className="contact-hero-content">
              <h1 className="contact-hero-title">
                Contact <span className="contact-hero-title-span">Hamsey</span>
              </h1>
              <p className="contact-hero-description">
                We’d love to hear from you. Reach out with any questions or
                feedback.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
