"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = { theme?: "dark" | "light" };

const Navigation: React.FC<Props> = ({ theme = "dark" }) => {
  const pathname = usePathname();
  // const isActive = (path: string) => pathname === path;

  return (
    <header className={`header ${theme === "light" ? "light-header" : ""}`}>
      <div className="header-content">
        <div className="logo-header animate-fade-in">
          <Link href="/">
            <Image
              src="/image/logo.svg"
              alt="Hemsey logo"
              width={150}
              height={40}
              priority
              className=""
            />
          </Link>
        </div>
        <div className="header-nav animate-fade-in">
          {/*
          <Link 
            href="/" 
            className={`nav-link ${theme === "light" ? "black-text" : "white-text"} ${isActive("/") ? "active-link" : ""}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`nav-link ${theme === "light" ? "black-text" : "white-text"} ${isActive("/about") ? "active-link" : ""}`}
          >
            About Us
          </Link>
          */}
          <button
            onClick={() =>
              (window.location.href =
                "https://play.google.com/store/apps/details?id=com.hamsey.co")
            }
            className={`${
              theme === "light"
                ? "btn-primary-bg-white-text"
                : "btn-white-bg-black-text"
            }`}
          >
            Download
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
