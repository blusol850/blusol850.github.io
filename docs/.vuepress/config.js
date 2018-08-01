module.exports = {
    title: 'blusol850',
    description: 'First VuePress Site',
    
    themeConfig: {
        sidebar: {
            '/ContentBox/': [
                '', /* /foo/ */
                // 'demo'
            ],
            '/blog/': [
                '', /* /foo/ */
                'resize-gdrive-images-on-the-fly',
                'private-s3-server-with-dockerscality-s3-server'
            ],

            // fallback
            '/': [
                '', /* / */
                'blog/',
                'about' /* /about.html */
            ]
        },
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'ContentBox',
                link: '/ContentBox/'
            },
            {
                text: 'Blog',
                link: '/blog/'
            },
            {
                text: 'Website',
                link: 'https://www.bluewatersolutions.com'
            },
        ]
    },
    
}
