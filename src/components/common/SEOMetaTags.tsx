"use client";
import React, { useEffect } from "react";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | null;
};

const SEOMetaTags: React.FC<Props> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage = "/image/logo.png",
  schema = null,
}) => {
  useEffect(() => {
    document.title = title || "Hamsey - Dating App";
  }, [title]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />} 
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />} 
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />} 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />} 
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Head>
  );
};

export default SEOMetaTags;

