import Navigation from "@/components/common/Navigation";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Policy | Hamsey Dating App",
  description:
    "Read the content policy for Hamsey dating app. Learn about acceptable content, prohibited materials, and community guidelines.",
  alternates: { canonical: "/content-policy" },
  openGraph: {
    type: "website",
    title: "Content Policy | Hamsey Dating App",
    description: "Read the content policy for Hamsey dating app.",
    url: "https://hamsey.co/content-policy",
    images: [{ url: "/image/logo.png" }],
  },
};

export default function ContentPolicyPage() {
  const contentPolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Content Policy | Hamsey Dating App",
    url: "https://hamsey.co/content-policy",
    description:
      "Read the content policy for Hamsey dating app. Learn about acceptable content, prohibited materials, and community guidelines.",
    mainEntity: {
      "@type": "WebPageElement",
      name: "Content Policy Document",
      text: "This content policy outlines the rules and guidelines for acceptable content on the Hamsey dating app.",
    },
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentPolicySchema) }}
      />
      <main className="terms-conditions-container">
        <section className="terms-hero-section">
          <Navigation />
          <div className="terms-hero-content">
            <h1 className="terms-hero-title animate-fade-in">
              Content <span className="primary-text">Policy</span>
            </h1>
            <p className="terms-hero-subtitle animate-slide-up delay-300">
              Guidelines for acceptable content and behavior on our platform
            </p>
          </div>
        </section>
        <section className="terms-content-section">
          <div className="container">
            <div className="terms-content animate-on-scroll slide-up">
              <h2>1. Introduction</h2>
              <p>
                Hamsey is committed to maintaining a safe, respectful, and
                positive environment for all users. This Content Policy outlines
                what content is acceptable on our platform and what is
                prohibited. By using Hamsey, you agree to comply with these
                guidelines. Violations may result in content removal, account
                warnings, suspension, or permanent termination.
              </p>

              <h2>2. Acceptable Content</h2>

              <h3>2.1 Profile Content</h3>
              <ul>
                <li>
                  <strong>Authentic Photos:</strong> Use clear, recent photos of
                  yourself only
                </li>
                <li>
                  <strong>Appropriate Images:</strong> Photos should be suitable
                  for a dating platform
                </li>
                <li>
                  <strong>Accurate Information:</strong> Provide truthful
                  information about yourself
                </li>
                <li>
                  <strong>Respectful Language:</strong> Use respectful and
                  appropriate language in your bio
                </li>
              </ul>

              <h3>2.2 Messaging Content</h3>
              <ul>
                <li>
                  <strong>Respectful Communication:</strong> Engage in
                  respectful and appropriate conversations
                </li>
                <li>
                  <strong>Consensual Interactions:</strong> Only share content
                  that the recipient has consented to receive
                </li>
                <li>
                  <strong>Appropriate Language:</strong> Use language that is
                  suitable for a dating platform
                </li>
                <li>
                  <strong>Genuine Intentions:</strong> Communicate with genuine
                  intentions to connect
                </li>
              </ul>

              <h2>3. Prohibited Content</h2>

              <h3>3.1 Explicit and Sexual Content</h3>
              <ul>
                <li>
                  <strong>No Nudity:</strong> No explicit nudity, sexual
                  content, or pornographic material
                </li>
                <li>
                  <strong>No Sexual Solicitation:</strong> No soliciting sexual
                  services or explicit content
                </li>
                <li>
                  <strong>No Sexual Harassment:</strong> No unwanted sexual
                  advances or inappropriate sexual comments
                </li>
                <li>
                  <strong>No Sexualized Content:</strong> No overly sexualized
                  or suggestive content
                </li>
              </ul>

              <h3>3.2 Violent and Harmful Content</h3>
              <ul>
                <li>
                  <strong>No Violence:</strong> No violent, graphic, or
                  disturbing images or content
                </li>
                <li>
                  <strong>No Threats:</strong> No threats of violence or harm
                  to others
                </li>
                <li>
                  <strong>No Self-Harm:</strong> No content promoting or
                  depicting self-harm
                </li>
                <li>
                  <strong>No Dangerous Activities:</strong> No content promoting
                  dangerous or illegal activities
                </li>
              </ul>

              <h3>3.3 Hateful and Discriminatory Content</h3>
              <ul>
                <li>
                  <strong>No Hate Speech:</strong> No content that attacks,
                  threatens, or incites hatred against individuals or groups
                  based on race, ethnicity, religion, gender, sexual
                  orientation, disability, or other protected characteristics
                </li>
                <li>
                  <strong>No Discrimination:</strong> No discriminatory
                  language or behavior
                </li>
                <li>
                  <strong>No Slurs:</strong> No use of slurs or derogatory
                  language
                </li>
                <li>
                  <strong>No Extremist Content:</strong> No content promoting
                  extremist ideologies
                </li>
              </ul>

              <h3>3.4 Fraudulent and Misleading Content</h3>
              <ul>
                <li>
                  <strong>No Fake Profiles:</strong> No impersonation or fake
                  profiles
                </li>
                <li>
                  <strong>No Scams:</strong> No fraudulent schemes, scams, or
                  deceptive practices
                </li>
                <li>
                  <strong>No Misleading Information:</strong> No false or
                  misleading information about yourself
                </li>
                <li>
                  <strong>No Catfishing:</strong> No using someone else&apos;s
                  photos or information
                </li>
              </ul>

              <h3>3.5 Commercial and Spam Content</h3>
              <ul>
                <li>
                  <strong>No Commercial Use:</strong> No using the platform for
                  commercial purposes without permission
                </li>
                <li>
                  <strong>No Spam:</strong> No unsolicited messages, spam, or
                  repetitive content
                </li>
                <li>
                  <strong>No Promotional Content:</strong> No advertising,
                  promotions, or marketing content
                </li>
                <li>
                  <strong>No External Links:</strong> No sharing links to
                  external websites for commercial purposes
                </li>
              </ul>

              <h3>3.6 Illegal Content</h3>
              <ul>
                <li>
                  <strong>No Illegal Activities:</strong> No content promoting
                  or depicting illegal activities
                </li>
                <li>
                  <strong>No Drug Content:</strong> No content related to
                  illegal drugs or drug use
                </li>
                <li>
                  <strong>No Weapons:</strong> No content depicting or promoting
                  weapons
                </li>
                <li>
                  <strong>No Copyright Infringement:</strong> No sharing
                  copyrighted material without permission
                </li>
              </ul>

              <h3>3.7 Underage Content</h3>
              <ul>
                <li>
                  <strong>No Minors:</strong> No content involving or depicting
                  minors
                </li>
                <li>
                  <strong>No Child Exploitation:</strong> Zero tolerance for
                  any content related to child exploitation
                </li>
                <li>
                  <strong>No Soliciting Minors:</strong> No attempting to
                  contact or interact with minors
                </li>
                <li>
                  <strong>Immediate Reporting:</strong> Any such content will be
                  immediately reported to authorities
                </li>
              </ul>

              <h2>4. Profile Photo Guidelines</h2>

              <h3>4.1 Photo Requirements</h3>
              <ul>
                <li>
                  <strong>Your Own Photos:</strong> Photos must be of yourself
                  only
                </li>
                <li>
                  <strong>Recent Photos:</strong> Use recent photos that
                  accurately represent your current appearance
                </li>
                <li>
                  <strong>Clear and Visible:</strong> Photos should be clear,
                  well-lit, and show your face
                </li>
                <li>
                  <strong>Appropriate Attire:</strong> Wear appropriate clothing
                  suitable for a dating platform
                </li>
              </ul>

              <h3>4.2 Prohibited Photos</h3>
              <ul>
                <li>No photos of other people (even with permission)</li>
                <li>No photos of celebrities or public figures</li>
                <li>No photos of children or minors</li>
                <li>No explicit, nude, or sexual content</li>
                <li>No violent or graphic images</li>
                <li>No copyrighted images or stock photos</li>
                <li>No photos with weapons or illegal items</li>
                <li>No photos promoting hate or discrimination</li>
              </ul>

              <h2>5. Messaging Guidelines</h2>

              <h3>5.1 Appropriate Messaging</h3>
              <ul>
                <li>
                  <strong>Respectful Communication:</strong> Be respectful and
                  courteous in all messages
                </li>
                <li>
                  <strong>Consent:</strong> Only send content that the recipient
                  has consented to receive
                </li>
                <li>
                  <strong>Appropriate Topics:</strong> Keep conversations
                  appropriate for a dating platform
                </li>
                <li>
                  <strong>Genuine Intentions:</strong> Communicate with genuine
                  intentions to connect
                </li>
              </ul>

              <h3>5.2 Prohibited Messaging</h3>
              <ul>
                <li>No unsolicited explicit content</li>
                <li>No harassment, threats, or abusive language</li>
                <li>No spam or repetitive messages</li>
                <li>No soliciting money, gifts, or services</li>
                <li>No sharing personal contact information prematurely</li>
                <li>No attempting to move conversations off-platform too quickly</li>
                <li>No sending unwanted photos or content</li>
              </ul>

              <h2>6. Enforcement and Consequences</h2>

              <h3>6.1 Content Moderation</h3>
              <ul>
                <li>
                  <strong>Automated Systems:</strong> We use automated systems
                  to detect prohibited content
                </li>
                <li>
                  <strong>Human Review:</strong> Reports are reviewed by our
                  moderation team
                </li>
                <li>
                  <strong>Proactive Monitoring:</strong> We actively monitor
                  content for policy violations
                </li>
                <li>
                  <strong>User Reports:</strong> Users can report violations
                  through the app
                </li>
              </ul>

              <h3>6.2 Consequences of Violations</h3>
              <ul>
                <li>
                  <strong>Content Removal:</strong> Violating content will be
                  immediately removed
                </li>
                <li>
                  <strong>Warnings:</strong> First-time violations may result in
                  a warning
                </li>
                <li>
                  <strong>Account Suspension:</strong> Repeated violations may
                  result in temporary account suspension
                </li>
                <li>
                  <strong>Account Termination:</strong> Serious or repeated
                  violations may result in permanent account termination
                </li>
                <li>
                  <strong>Legal Action:</strong> Illegal content may be reported
                  to law enforcement
                </li>
              </ul>

              <h2>7. Reporting Violations</h2>

              <h3>7.1 How to Report</h3>
              <ul>
                <li>
                  <strong>In-App Reporting:</strong> Use the report button on
                  profiles or messages
                </li>
                <li>
                  <strong>Email Reporting:</strong> Report serious violations to
                  support@hamsey.co
                </li>
                <li>
                  <strong>Emergency Situations:</strong> For immediate threats,
                  contact local law enforcement
                </li>
              </ul>

              <h3>7.2 What to Report</h3>
              <ul>
                <li>Explicit or sexual content</li>
                <li>Violent or threatening content</li>
                <li>Hateful or discriminatory content</li>
                <li>Fake profiles or impersonation</li>
                <li>Spam or commercial content</li>
                <li>Harassment or abusive behavior</li>
                <li>Underage users or content</li>
                <li>Any other policy violations</li>
              </ul>

              <h2>8. Age Restrictions</h2>

              <h3>8.1 Minimum Age Requirement</h3>
              <ul>
                <li>
                  <strong>18+ Only:</strong> Hamsey is strictly for users 18
                  years and older
                </li>
                <li>
                  <strong>Age Verification:</strong> We verify user age during
                  registration
                </li>
                <li>
                  <strong>Zero Tolerance:</strong> Zero tolerance for underage
                  users or content involving minors
                </li>
                <li>
                  <strong>Immediate Action:</strong> Underage accounts are
                  immediately removed and reported
                </li>
              </ul>

              <h2>9. Intellectual Property</h2>

              <h3>9.1 Your Content</h3>
              <ul>
                <li>
                  <strong>Ownership:</strong> You retain ownership of content you
                  post
                </li>
                <li>
                  <strong>License:</strong> By posting, you grant us a license to
                  use your content for the service
                </li>
                <li>
                  <strong>Responsibility:</strong> You are responsible for
                  ensuring you have rights to post content
                </li>
              </ul>

              <h3>9.2 Copyright</h3>
              <ul>
                <li>
                  <strong>No Infringement:</strong> Do not post copyrighted
                  material without permission
                </li>
                <li>
                  <strong>DMCA Compliance:</strong> We comply with DMCA takedown
                  requests
                </li>
                <li>
                  <strong>Original Content:</strong> Use only original content or
                  content you have permission to use
                </li>
              </ul>

              <h2>10. Updates to This Policy</h2>

              <h3>10.1 Policy Changes</h3>
              <ul>
                <li>
                  <strong>Right to Modify:</strong> We may update this policy at
                  any time
                </li>
                <li>
                  <strong>Notification:</strong> Significant changes will be
                  communicated to users
                </li>
                <li>
                  <strong>Effective Date:</strong> Changes become effective when
                  posted
                </li>
                <li>
                  <strong>Continued Use:</strong> Continued use constitutes
                  acceptance of updated policies
                </li>
              </ul>

              <h2>11. Contact Information</h2>

              <h3>11.1 Content Policy Questions</h3>
              <ul>
                <li>
                  <strong>Email:</strong> support@hamsey.co
                </li>
                <li>
                  <strong>Website:</strong> https://hamsey.co
                </li>
                <li>
                  <strong>Response Time:</strong> We respond to inquiries within
                  48 hours
                </li>
              </ul>

              <h3>11.2 Reporting Violations</h3>
              <ul>
                <li>
                  <strong>In-App:</strong> Use the report feature in the app
                </li>
                <li>
                  <strong>Email:</strong> support@hamsey.co
                </li>
                <li>
                  <strong>Emergency:</strong> Contact local law enforcement for
                  immediate threats
                </li>
              </ul>

              <p className="last-updated">Last Updated: December 19, 2024</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

