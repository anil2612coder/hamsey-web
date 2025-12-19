"use client";

import React, { Suspense, useEffect } from "react";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/home/Footer";
import { useSearchParams } from "next/navigation";

function ProfileContent() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");

    useEffect(() => {
        if (username) {
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
                const now = Date.now();
                setTimeout(() => {
                    if (Date.now() - now < 1500) {
                    }
                }, 1000);
            }
        }
    }, [username]);

    const handleOpenApp = () => {
        if (username) {
            window.location.href = `hamsey://other_profile?username=${username}`;
        }
    };

    const handleDownloadAndroid = () => {
        window.open(
            "https://play.google.com/store/apps/details?id=com.hamsey.co",
            "_blank"
        );
    };

    const handleDownloadIOS = () => {
        window.location.href =
            "https://apps.apple.com/in/app/hamsey-from-glance-to-hello/id6755126171";
    };

    return (
        <div className="flex-grow flex flex-col items-center justify-center p-8 pt-24 text-center min-h-[60vh]">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                <div className="mb-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-3xl">
                        👤
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Check out{" "}
                    <span className="text-[#D91C4B]">
                        {username || "this user"}
                    </span>{" "}
                    on Hamsey
                </h1>

                <p className="mb-8 text-gray-600 text-lg">
                    Join the community to connect with{" "}
                    {username || "people"} and others nearby safely and securely.
                </p>

                <div className="flex flex-col gap-4 max-w-md mx-auto w-full">
                    <button
                        onClick={handleOpenApp}
                        className="w-full bg-[#D91C4B] hover:bg-[#b0163b] text-white font-bold py-3 px-6 rounded-full transition-colors"
                    >
                        Open in App
                    </button>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                        <button
                            onClick={handleDownloadAndroid}
                            className="flex-1 bg-black text-white py-3 px-6 rounded-full hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                        >
                            <span>Google Play</span>
                        </button>
                        <button
                            onClick={handleDownloadIOS}
                            className="flex-1 bg-black text-white py-3 px-6 rounded-full hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                        >
                            <span>App Store</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default function ShareProfilePage() {
    return (
        <main className="bg-white min-h-screen flex flex-col w-full text-black">
            <Navigation theme="light" />

            <Suspense
                fallback={
                    <div className="flex-grow flex items-center justify-center">
                        Loading...
                    </div>
                }
            >
                <ProfileContent />
            </Suspense>

            <Footer />
        </main>
    );
}
