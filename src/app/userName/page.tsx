"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function UserNameRedirect() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const code = searchParams.get("code");

    useEffect(() => {
        if (code) {
            router.replace(`/share/profile?username=${code}`);
        } else {
            router.replace("/");
        }
    }, [code, router]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-white text-black">
            <p>Redirecting...</p>
        </div>
    );
}
