import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://hamsey.co';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/share/profile', '/userName'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
