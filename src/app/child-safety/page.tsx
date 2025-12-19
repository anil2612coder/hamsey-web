import Navigation from "@/components/common/Navigation";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Safety Standards | Hamsey",
  description:
    "Read Hamsey's Child Safety Standards: CSAM prevention, reporting pathways, enforcement, and designated point of contact.",
  alternates: { canonical: "/child-safety" },
  openGraph: {
    type: "website",
    title: "Child Safety Standards | Hamsey",
    description:
      "Hamsey's standards against child sexual abuse and exploitation (CSAE).",
    url: "https://hamsey.co/child-safety",
    images: [{ url: "/image/og-image.png", width: 1200, height: 630, alt: "Hamsey Child Safety Standards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Child Safety Standards | Hamsey",
    description:
      "Hamsey's standards against child sexual abuse and exploitation (CSAE).",
    images: ["/image/og-image.png"],
  },
};

export default function ChildSafetyPage() {
  const childSafetySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Child Safety Standards | Hamsey",
    url: "https://hamsey.co/child-safety",
    description:
      "Hamsey's published standards and designated contact regarding child safety and CSAM prevention.",
    mainEntity: {
      "@type": "WebPageElement",
      name: "Child Safety Standards",
      text: "Hamsey's policies and procedures to prevent, detect, and report CSAM; including enforcement and reporting pathways.",
    },
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(childSafetySchema) }}
      />
      <main className="terms-conditions-container">
        <section className="terms-hero-section">
          <Navigation />
          <div className="terms-hero-content">
            <h1 className="terms-hero-title animate-fade-in">
              Child Safety <span className="primary-text">Standards</span>
            </h1>
            <p className="terms-hero-subtitle animate-slide-up delay-300">
              Our commitment to preventing child sexual abuse and exploitation
            </p>
          </div>
        </section>

        <section className="terms-content-section">
          <div className="container">
            <div className="terms-content animate-on-scroll slide-up">
              <h2>1. Scope and Commitment</h2>
              <p>
                Hamsey is for adults only. Users must be 18 years or older. We
                maintain a zero-tolerance policy for child sexual abuse material
                (CSAM) and any form of child exploitation or endangerment.
              </p>

              <h2>2. Prevention and Detection</h2>
              <ul>
                <li>Age-gating and abuse reporting inside the app.</li>
                <li>
                  Proactive moderation workflows to quickly investigate and act
                  on reports related to potential child safety risk.
                </li>
                <li>
                  Content and account review when indicated by user reports or
                  safety signals.
                </li>
              </ul>

              <h2>3. Reporting Pathways</h2>
              <p>
                Users can report concerns directly in-app via the Report flow on
                profiles and chats. For urgent threats or if you cannot access
                the app, please contact local law enforcement.
              </p>

              <h2>4. Enforcement</h2>
              <p>
                We promptly remove CSAM, ban involved accounts, and preserve
                data where required by law. We may disable devices and escalate
                repeat or egregious abuse.
              </p>

              <h2>5. External Reporting to Authorities</h2>
              <p>
                We comply with applicable child safety laws and report to
                regional and national authorities as required.
              </p>

              <h2>6. Designated Point of Contact</h2>
              <p>
                For inquiries about our CSAM prevention practices and compliance
                with child safety policies, contact our designated point of
                contact:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:rohit.hamsey@gmail.com">
                  rohit.hamsey@gmail.com
                </a>
              </p>
              <p>
                This contact is monitored and is kept up to date in our Child
                Safety Standards declaration.
              </p>

              <h2>7. Additional Resources</h2>
              <p>
                If you believe someone is in immediate danger, contact your
                local emergency services first.
              </p>

              <p className="last-updated">Last Updated: October 13, 2025</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
