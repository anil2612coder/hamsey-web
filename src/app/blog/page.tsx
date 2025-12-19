import Navigation from "@/components/common/Navigation";
import Footer from "@/components/home/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import FAQSchema from "@/components/common/FAQSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Hamsey - Tips for Connecting with People Nearby",
    description:
        "Read the latest articles, tips, and guides about making meaningful connections, social networking, and staying safe while meeting new people.",
    alternates: { canonical: "/blog" },
    openGraph: {
        type: "website",
        title: "Blog | Hamsey",
        description:
            "Read the latest articles, tips, and guides about making meaningful connections and staying safe.",
        url: "https://hamsey.co/blog",
        images: [
            {
                url: "/image/og-image.png",
                width: 1200,
                height: 630,
                alt: "Hamsey Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Hamsey",
        description:
            "Read the latest articles, tips, and guides about making meaningful connections.",
        images: ["/image/og-image.png"],
    },
};

// Sample blog data - in production, this would come from a CMS or database
const blogPosts = [
    {
        id: 1,
        slug: "5-tips-for-making-authentic-connections",
        title: "5 Tips for Making Authentic Connections in Your Community",
        excerpt:
            "Discover how to build genuine relationships with people around you. Learn the art of authentic connection in the digital age.",
        category: "Tips",
        date: "December 15, 2024",
        readTime: "5 min read",
        image: "/image/og-image.png",
    },
    {
        id: 2,
        slug: "staying-safe-while-meeting-new-people",
        title: "Staying Safe While Meeting New People: A Complete Guide",
        excerpt:
            "Your safety is our priority. Here's everything you need to know about meeting new connections safely and securely.",
        category: "Safety",
        date: "December 10, 2024",
        readTime: "8 min read",
        image: "/image/og-image.png",
    },
    {
        id: 3,
        slug: "power-of-proximity-networking",
        title: "The Power of Proximity: Why Local Connections Matter",
        excerpt:
            "In a world of global connections, discover why the people around you might be the most valuable network you have.",
        category: "Community",
        date: "December 5, 2024",
        readTime: "6 min read",
        image: "/image/og-image.png",
    },
];

// FAQs for the blog page
const blogFAQs = [
    {
        question: "What is Hamsey?",
        answer:
            "Hamsey is a proximity-based social networking app that helps you connect with people nearby safely and securely. Unlike traditional social networks, Hamsey focuses on meaningful local connections.",
    },
    {
        question: "How does Hamsey keep me safe?",
        answer:
            "Hamsey uses end-to-end encryption for all messages, verifies user identities, and provides various safety features like the ability to block and report users. We never share your exact location with other users.",
    },
    {
        question: "Is Hamsey free to use?",
        answer:
            "Yes, Hamsey is free to download and use. We offer optional premium features for users who want enhanced functionality.",
    },
    {
        question: "How do I get started with Hamsey?",
        answer:
            "Simply download Hamsey from the App Store or Google Play, create your profile, and start discovering people in your area. It's that easy!",
    },
];

export default function BlogPage() {
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Hamsey Blog",
        description:
            "Tips, guides, and articles about making meaningful connections and staying safe while meeting new people.",
        url: "https://hamsey.co/blog",
        publisher: {
            "@type": "Organization",
            name: "Hamsey",
            logo: {
                "@type": "ImageObject",
                url: "https://hamsey.co/image/logo.svg",
            },
        },
    };

    const breadcrumbItems = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <FAQSchema faqs={blogFAQs} />

            <main className="blog-container">
                <Navigation theme="dark" />

                {/* Hero Section */}
                <section className="blog-hero-section">
                    <div className="blog-hero-content animate-fade-in">
                        <h1 className="blog-hero-title">Hamsey Blog</h1>
                        <p className="blog-hero-subtitle">
                            Tips, guides, and stories about making meaningful connections in
                            your community
                        </p>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                {/* Blog Posts */}
                <section className="blog-content-section">
                    {blogPosts.length > 0 ? (
                        <div className="blog-grid">
                            {blogPosts.map((post) => (
                                <article key={post.id} className="blog-card animate-on-scroll slide-up">
                                    <div className="blog-card-content">
                                        <span className="blog-card-category">{post.category}</span>
                                        <h2 className="blog-card-title">{post.title}</h2>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        <div className="blog-card-meta">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="blog-empty-state">
                            <h2 className="blog-empty-title">Coming Soon!</h2>
                            <p className="blog-empty-text">
                                We&apos;re working on some great content for you. Check back soon
                                for articles, tips, and guides about making meaningful
                                connections.
                            </p>
                        </div>
                    )}
                </section>

                {/* FAQ Section */}
                <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px 80px" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem", color: "#1f1f1f" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "grid", gap: "1rem" }}>
                        {blogFAQs.map((faq, index) => (
                            <details
                                key={index}
                                style={{
                                    background: "#f8f9fa",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                }}
                            >
                                <summary
                                    style={{
                                        cursor: "pointer",
                                        fontWeight: 600,
                                        color: "#1f1f1f",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    {faq.question}
                                </summary>
                                <p style={{ marginTop: "1rem", color: "#666", lineHeight: 1.6 }}>
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
