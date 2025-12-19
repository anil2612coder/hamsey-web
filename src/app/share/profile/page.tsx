"use client";

import React, { Suspense, useEffect } from "react";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/home/Footer";
import { useSearchParams } from "next/navigation";

function ProfileContent() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");

    useEffect(() => {
        if (!username) return;

        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        const isAndroid = /android/i.test(userAgent);
        const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;

        if (isAndroid || isIOS) {
            const appUrl = `hamsey://other_profile?username=${username}`;
            const storeUrl = isAndroid
                ? "https://play.google.com/store/apps/details?id=com.hamsey.co"
                : "https://apps.apple.com/in/app/hamsey-from-glance-to-hello/id6755126171";

            const start = Date.now();

            // Try to open the app
            window.location.href = appUrl;

            // Fallback to store if the app doesn't open
            setTimeout(() => {
                const elapsed = Date.now() - start;
                // If the browser was not suspended (meaning app didn't open), redirect to store
                // 3000ms threshold allows for some buffer
                if (!document.hidden && elapsed < 3000) {
                    window.location.href = storeUrl;
                }
            }, 2500);
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
        <div className="flex-grow flex flex-col items-center justify-center px-10 pt-32 pb-12 md:p-16 text-center min-h-[60vh]">
            <div className="max-w-lg w-full bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 p-8 md:p-12 border border-gray-100 relative z-10">

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                    Check out{" "}
                    <span className="text-[#D91C4B]">
                        {username || "this user"}
                    </span>{" "}
                    on Hamsey
                </h1>

                <p className="mb-10 px-2 sm:px-0 text-gray-500 text-lg md:text-xl leading-relaxed">
                    Join the community to connect with{" "}
                    {username || "people"} and others nearby safely and securely.
                </p>


                <div className="flex flex-col gap-6 max-w-sm mx-auto w-full px-2 sm:px-0 p-12">
                    <button
                        onClick={handleOpenApp}
                        className="w-full bg-[#D91C4B] hover:bg-[#b0163b] text-white font-bold py-4 px-8 rounded-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 text-lg shadow-lg hover:shadow-[#D91C4B]/25"
                    >
                        Open in App
                    </button>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={handleDownloadAndroid}
                            className="w-full bg-black text-white py-4 px-4 rounded-2xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 text-sm font-semibold shadow-md active:scale-95"
                        >
                            <span>Google Play</span>
                        </button>
                        <button
                            onClick={handleDownloadIOS}
                            className="w-full bg-black text-white py-4 px-4 rounded-2xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 text-sm font-semibold shadow-md active:scale-95"
                        >
                            <span>App Store</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
