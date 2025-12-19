"use client";

import React from "react";
import Link from "next/link";

type BreadcrumbItem = {
    name: string;
    href: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
    className?: string;
};

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
    // Generate JSON-LD schema for breadcrumbs
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `https://hamsey.co${item.href}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <nav aria-label="Breadcrumb" className={`breadcrumb-nav ${className}`}>
                <ol className="breadcrumb-list">
                    {items.map((item, index) => (
                        <li key={item.href} className="breadcrumb-item">
                            {index < items.length - 1 ? (
                                <>
                                    <Link href={item.href} className="breadcrumb-link">
                                        {item.name}
                                    </Link>
                                    <span className="breadcrumb-separator" aria-hidden="true">
                                        /
                                    </span>
                                </>
                            ) : (
                                <span className="breadcrumb-current" aria-current="page">
                                    {item.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
