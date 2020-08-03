module.exports = {
    title: "松ケ丘小学校おやじの会（β）",
    description: "「できる時に、できる事を、できる人が」を合言葉に、児童、地域にかかわりながら、和気あいあい、楽しく活動している会です。",
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon/icon-192x192.png' }],
        ['link', { rel: 'apple-touch-icon', type: 'image/png', href: '/favicon/apple-touch-icon-180x180.png' }],
        ['meta', { name: 'og:url', content: 'http://matsu-oyaji.net/' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:title', content: '松ケ丘小学校おやじの会' }],
        ['meta', { name: 'og:description', content: '松ケ丘小学校おやじの会のホームページ。' }],
        ['meta', { name: 'og:image', content: '/og.png' }]
    ],
    locales: {
        "/": {
            lang: "ja"
        }
    },
    themeConfig: {
        lastUpdated: 'Last Updated',
        logo: "/img/icon-160x160.png",
        nav: [
            { text: "HOME", link: "/" },
            { text: "ABOUT", items: [
                { text: "おやじの会とは", link: "/about/" },
                { text: "活動内容", link: "/about/activities.html" },
                { text: "校長先生より", link: "/about/principal.html" },
                { text: "会員規約", link: "/about/rules.html" }
            ] },
            { text: "NEWS", link: "/news/" },
            { text: "LINKS", link: "/links.html" },
            { text: "入会", link: "/joinus.html" }
        ],
    }
};
