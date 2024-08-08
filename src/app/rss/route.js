import RSS from "rss"

export async function GET() {
    const feed = new RSS({
        title: '패키지상자 포장박스제작 | 한양인팩',
        description: "포장박스제작 전문업체. 체계적인 원스톱 시스템으로 고객이 원하는 최적의 패키지상자를 만들어 드립니다.",
        site_url: 'https://hanyanginpack.com',
        feed_url: 'https://hanyanginpack.com/feed.xml',
        copyright: 'Cherisia',
        pubDate: new Date(),
    });

    const items = [
        {
            title: '한양인팩 메인',
            description: '한양인팩은 최고의 서비스와 다년간 축적된 노하우로 최상의 패키지를 만들어 냅니다.',
            url: 'https://hanyanginpack.com',
            date: new Date(),
        },
        {
            title: '한양인팩 회사소개',
            description: '패키지 설계부터 디자인, 그리고 제작까지 한번에 진행하는 원스톱 솔루션으로 고객의 요구에 신속하고 정확하게 대응하고 있습니다.',
            url: 'https://hanyanginpack.com/about',
            date: new Date(),
        },
        {
            title: '한양인팩 오시는길',
            description: '고객의 이익과 요구를 위해 끊임없이 노력하겠습니다.',
            url: 'https://hanyanginpack.com/contact',
            date: new Date(),
        },
        {
            title: '한양인팩 자주 묻는 질문',
            description: '아래의 질문 외에도 궁금하신 점은 고객센터로 언제든지 문의해주세요!',
            url: 'https://hanyanginpack.com/faq',
            date: new Date(),
        },
        {
            title: '한양인팩 견적문의',
            description: '견적문의를 남겨주시면 최대한 빠르게 답변해 드리겠습니다.',
            url: 'https://hanyanginpack.com/inquiry',
            date: new Date(),
        }
    ]

    items.map((item, index) => {
        feed.item({
            title: item.title,
            description: item.description,
            url: item.url,
            date: item.date,
        });
    })

    return new Response(feed.xml({indent: true}), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}