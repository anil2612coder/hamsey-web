import Footer from "@/components/home/Footer";
import type { Metadata } from "next";
import DeleteAccountForm from "@/components/delete/DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete Account | Hamsey",
  description:
    "Request deletion of your Hamsey account. Submit your email and reason to initiate account deletion.",
  alternates: { canonical: "/deleteaccount" },
  openGraph: {
    type: "website",
    title: "Delete Account | Hamsey",
    description:
      "Request deletion of your Hamsey account. Submit your email and reason to initiate account deletion.",
    url: "https://hamsey.co/deleteaccount",
    images: [{ url: "/image/logo.png" }],
  },
};

export default function DeleteAccountPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Delete Account | Hamsey",
    url: "https://hamsey.co/deleteaccount",
    description:
      "Request deletion of your Hamsey account. Submit your email and reason to initiate account deletion.",
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main
        className="contact-us-container"
        style={{ paddingTop: 40, paddingBottom: 40 }}
      >
        <section
          className="contact-hero-section"
          style={{ textAlign: "center", marginBottom: 24 }}
        >
          <h1>Delete your Hamsey account</h1>
          <p>
            We&apos;re sorry to see you go. Submit the form below to request
            deletion of your account.
          </p>
        </section>

        <section
          className="contact-form-section"
          style={{ maxWidth: 640, margin: "0 auto" }}
        >
          <DeleteAccountForm />
        </section>

        <Footer />
      </main>
    </>
  );
}
