const BASE_URL = 'https://hanyanginpack.com';

const pages = [
    {
        path: '',
        changeFreq: 'monthly',
        priority: 1,
        images: [
            { loc: '/img/main/hero/main2.webp', title: '한양인팩 포장박스 제작 공장 메인 이미지' },
        ],
    },
    {
        path: '/about',
        changeFreq: 'monthly',
        priority: 0.9,
        images: [
            { loc: '/img/about/about_main.webp', title: '한양인팩 회사소개' },
        ],
    },
    {
        path: '/contact',
        changeFreq: 'yearly',
        priority: 0.5,
        images: [
            { loc: '/img/contact/contact_main.webp', title: '한양인팩 오시는길' },
        ],
    },
    {
        path: '/faq',
        changeFreq: 'yearly',
        priority: 0.7,
        images: [
            { loc: '/img/faq/faq_main.webp', title: '한양인팩 자주 묻는 질문' },
        ],
    },
    {
        path: '/guide',
        changeFreq: 'monthly',
        priority: 0.8,
        images: [
            { loc: '/img/guide/guide_main.webp', title: '한양인팩 박스 제작 가이드' },
        ],
    },
    {
        path: '/guide/corrugated',
        changeFreq: 'monthly',
        priority: 0.7,
        images: [
            { loc: '/img/guide/guide_main.webp', title: '한양인팩 골판지 종류 가이드' },
            { loc: '/img/guide/corrugated/cross_section.webp', title: '골판지 이중구조 단면 실사 사진' },
        ],
    },
    {
        path: '/guide/paper',
        changeFreq: 'monthly',
        priority: 0.7,
        images: [
            { loc: '/img/guide/guide_main.webp', title: '한양인팩 종이 종류 가이드' },
        ],
    },
    {
        path: '/inquiry',
        changeFreq: 'weekly',
        priority: 0.8,
        images: [
            { loc: '/img/inquiry/inquiry_main.webp', title: '한양인팩 견적문의' },
            { loc: '/img/inquiry/inquiry_main_2.webp', title: '한양인팩 견적문의' },
        ],
    },
];

function buildXml() {
    const lastmod = new Date().toISOString();

    const urlEntries = pages.map(({ path, changeFreq, priority, images }) => {
        const imageXml = images
            .map(
                (img) => `
    <image:image>
      <image:loc>${BASE_URL}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>`
            )
            .join('');

        return `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>${imageXml}
  </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urlEntries.join('')}
</urlset>`;
}

export async function GET() {
    return new Response(buildXml(), {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
