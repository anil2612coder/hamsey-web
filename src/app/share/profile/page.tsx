import type { Metadata } from "next";
import ProfileClient from "./ProfileClient";

export const metadata: Metadata = {
    title: "View Profile on Hamsey | Connect with People Nearby",
    description:
        "Open this profile in the Hamsey app to connect with people nearby. Download Hamsey on iOS or Android to start making meaningful connections.",
    alternates: { canonical: "/share/profile" },
    openGraph: {
        type: "website",
        title: "View Profile on Hamsey",
        description:
            "Open this profile in the Hamsey app to connect with people nearby safely and securely.",
        url: "https://hamsey.co/share/profile",
        images: [{ url: "/image/og-image.png", width: 1200, height: 630, alt: "View Profile on Hamsey" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "View Profile on Hamsey",
        description:
            "Open this profile in the Hamsey app to connect with people nearby safely and securely.",
        images: ["/image/og-image.png"],
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function ShareProfilePage() {
    return <ProfileClient />;
}
