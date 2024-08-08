

export default function manifest() {
    return {
        name: 'All in one ai toolkit App',
        short_name: 'Ai Pal',
        description:
            'All in one ai toolkit App. Get your all ai generating content done at single place across multiple providers',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
