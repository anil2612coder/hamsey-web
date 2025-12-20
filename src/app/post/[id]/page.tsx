"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const STORE_LINKS = {
    playStore: "https://play.google.com/store/apps/details?id=com.hamsey.co",
    appStore:
        "https://apps.apple.com/in/app/hamsey-from-glance-to-hello/id6755126171",
};

export default function PostRedirectPage() {
    const params = useParams();
    const postId = params.id as string;
    const [isRedirecting, setIsRedirecting] = useState(true);

    useEffect(() => {
        const deepLink = `hamsey://viewPost?id=${postId}`;
        const timer = setTimeout(() => {
            setIsRedirecting(false);
        }, 1000);

        try {
            window.location.href = deepLink;
        } catch (e) {
            console.error("Deep link failed", e);
        }

        return () => clearTimeout(timer);
    }, [postId]);

    const handleAppStoreClick = () => {
        window.location.href = STORE_LINKS.appStore;
    };

    const handlePlayStoreClick = () => {
        window.location.href = STORE_LINKS.playStore;
    };

    return (
        <div className="download-page">
            {/* Reuse download page styles */}
            <div className="download-bg-gradient"></div>
            <div className="download-bg-pattern"></div>

            <header className="download-header">
                <Link href="/" className="download-logo">
                    <Image
                        src="/image/logo.svg"
                        alt="Hamsey"
                        width={120}
                        height={32}
                        priority
                    />
                </Link>
            </header>

            <main className="download-main">
                <div className="download-content animate-fade-in">
                    <div className="download-app-icon animate-scale-up">
                        <Image
                            src="/image/logo.svg"
                            alt="Hamsey App"
                            width={80}
                            height={80}
                            priority
                        />
                    </div>

                    <h1 className="download-title animate-slide-up">
                        View Post on <span className="download-title-highlight">Hamsey</span>
                    </h1>

                    <p className="download-subtitle animate-slide-up delay-100">
                        Opening post in app...
                    </p>

                    {!isRedirecting && (
                        <div className="animate-fade-in">
                            <p className="download-description animate-slide-up delay-200" style={{ marginTop: '1rem' }}>
                                Don't have the app? Download now to view this post.
                            </p>

                            <div className="download-buttons animate-slide-up delay-300">
                                <button
                                    onClick={handlePlayStoreClick}
                                    className="download-store-btn download-store-btn-android"
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                    </svg>
                                    <div className="download-store-btn-text">
                                        <span className="download-store-btn-label">GET IT ON</span>
                                        <span className="download-store-btn-store">Google Play</span>
                                    </div>
                                </button>

                                <button
                                    onClick={handleAppStoreClick}
                                    className="download-store-btn download-store-btn-ios"
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="download-store-btn-text">
                                        <span className="download-store-btn-label">Download on the</span>
                                        <span className="download-store-btn-store">App Store</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <footer className="download-footer animate-fade-in delay-500">
                <p>
                    © 2025 Hamsey. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
