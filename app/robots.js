
export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://aipal.janakakariyawasam.xyz/sitemap.xml',
    }
}
