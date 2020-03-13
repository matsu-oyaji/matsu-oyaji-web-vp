module.exports = {
    title: "松ケ丘小学校おやじの会",
    description: "「できる時に、できる事を、できる人が」を合言葉に、児童、地域にかかわりながら、和気あいあい、楽しく活動している会です。",
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        ['meta', { name: 'og:url', content: 'http://matsu-oyaji.net/' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:title', content: 'Sample Site' }],
        ['meta', { name: 'og:description', content: '松ケ丘小学校おやじの会のホームページ。' }],
        ['meta', { name: 'og:image', content: '/og.png' }]
    ],
    locales: {
        "/": {
            lang: "ja"
        }
    },
    themeConfig: {
        nav: [
            { text: "HOME", link: "/" },
            { text: "おやじの会とは", link: "/about.html" },
            { text: "新着お知らせ", link: "/updates/" },
            { text: "入会はこちら", link: "/joinus.html" }
        ],
        sidebar: [
            '/principal.html',
            '/activity.html',
            '/links.html',
            '/rules.html'
        ],
    }
};
