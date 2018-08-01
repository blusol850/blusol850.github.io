module.exports = {
    title: 'blusol850',
    description: 'First VuePress Site',
    
    themeConfig: {
        sidebar: {
            '/ContentBox/': [
                '', /* /foo/ */
                // 'demo'
            ],

            // fallback
            '/': [
                '', /* / */
                'contact', /* Contact   */
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
                text: 'Website',
                link: 'https://www.bluewatersolutions.com'
            },
        ]
    },
    
}
