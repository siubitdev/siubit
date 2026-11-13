// All site copy lives here, one block per language.
// Case studies are separate Markdown files in src/content/work/<lang>/.

export const site = {
  email: 'ahbit@siubit.dev',
  github: 'siubitdev',
  // Digits only, with country code (e.g. '85291234567'). Leave empty to hide the button.
  whatsapp: '',
};

export const locales = ['en', 'zh-hk'] as const;
export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, string> = { en: 'en', 'zh-hk': 'zh-HK' };
export const homePath: Record<Locale, string> = { en: '/', 'zh-hk': '/zh-hk/' };

export const ui = {
  en: {
    metaTitle: 'siu/bit — small bits, smart systems',
    metaDescription:
      'Solo developer in Hong Kong building websites, booking tools, internal apps and AI workflows for small businesses.',
    skip: 'Skip to content',
    homeLabel: 'siu/bit home',
    navLabel: 'Main',
    nav: { build: '/build', work: '/work', learn: '/learn', contact: 'say hi' },
    switchTo: { label: '中文', lang: 'zh-HK', locale: 'zh-hk' as Locale },
    hero: {
      eyebrow: '// solo developer · Hong Kong · siu (小) = small',
      title: ['Small bits,', 'smart systems'],
      lead: 'I build the small, useful systems that keep Hong Kong small businesses running — websites, booking tools, internal apps and AI workflows. One bit at a time, done properly.',
      primary: 'Start a small project',
      secondary: "See what I've built",
    },
    build: {
      title: 'What I build',
      items: [
        {
          title: 'Sites & shops',
          body: 'Fast, bilingual websites and simple online shops. Static where possible, secure by default, cheap to run.',
        },
        {
          title: 'Tools & small apps',
          body: "Booking, contact maps, trackers, member directories — the internal tools a spreadsheet can't quite handle.",
        },
        {
          title: 'AI workflows',
          body: 'Practical AI for minutes, posters, content and admin — set up so your team actually uses it, with your data kept private.',
        },
      ],
    },
    how: {
      title: 'How I work',
      items: [
        {
          title: '1 · Find the small bit',
          body: 'We pick the one process that wastes the most time. No big-bang rebuilds.',
        },
        {
          title: '2 · Build it properly',
          body: 'Bilingual, secure, PDPA-aware. Shipped in weeks, not months.',
        },
        {
          title: '3 · Hand it over',
          body: "You own the code, data and accounts. Clear docs so you're never locked in.",
        },
      ],
    },
    work: { title: 'Selected bits' },
    learn: {
      title: 'AI 101 workshops',
      body: 'Hands-on sessions in Cantonese and English: use AI for meeting minutes, slides and posters — safely, with your business data kept private.',
      cta: 'Ask about the next session →',
      mailSubject: 'AI 101 workshop',
    },
    contact: { title: ['Got a small bit', 'that needs fixing?'], whatsapp: 'WhatsApp' },
    footer: { place: 'Hong Kong', promise: 'no trackers · no cookies' },
    notFound: { title: 'Page not found', body: "That bit doesn't exist.", back: 'Back to home' },
  },
  'zh-hk': {
    metaTitle: 'siu/bit 小bit — 由小做起，系統做好',
    metaDescription: '香港獨立開發者，為中小企建立網站、預約工具、內部應用程式和 AI 工作流程。',
    skip: '跳到主要內容',
    homeLabel: 'siu/bit 主頁',
    navLabel: '主選單',
    nav: { build: '/build', work: '/work', learn: '/learn', contact: '聯絡我' },
    switchTo: { label: 'EN', lang: 'en', locale: 'en' as Locale },
    hero: {
      eyebrow: '// 獨立開發者 · 香港 · siu（小）= 細',
      title: ['由小做起，', '系統做好'],
      lead: '我為香港中小企建立細小而實用的系統：網站、預約工具、內部應用程式和 AI 工作流程。一次做一小部分，每一部分都認真做好。',
      primary: '開始一個小項目',
      secondary: '看看我做過的',
    },
    build: {
      title: '我做甚麼',
      items: [
        {
          title: '網站及網店',
          body: '快速、中英雙語的網站和簡單網店。能靜態就靜態，預設安全，營運成本低。',
        },
        {
          title: '工具及小型應用',
          body: '預約、聯絡人地圖、追蹤表、會員名錄——試算表應付不來的內部工具。',
        },
        {
          title: 'AI 工作流程',
          body: '實用的 AI，用於會議紀錄、海報、內容和行政工作——設定到團隊真的會用，資料保持私隱。',
        },
      ],
    },
    how: {
      title: '我怎樣工作',
      items: [
        { title: '1 · 找出那一小部分', body: '先選出最浪費時間的一個流程，不搞大翻新。' },
        { title: '2 · 認真做好', body: '雙語、安全、顧及私隱條例。以星期計交付，不是以月計。' },
        { title: '3 · 交到你手', body: '程式碼、資料和帳戶都屬於你。附清晰文件，不會被綁死。' },
      ],
    },
    work: { title: '精選作品' },
    learn: {
      title: 'AI 101 工作坊',
      body: '廣東話及英語的實習課：用 AI 做會議紀錄、簡報和海報——安全地用，公司資料保持私隱。',
      cta: '查詢下一場 →',
      mailSubject: 'AI 101 工作坊',
    },
    contact: { title: ['有個小問題', '想解決？'], whatsapp: 'WhatsApp' },
    footer: { place: '香港', promise: '無追蹤 · 無 cookies' },
    notFound: { title: '找不到頁面', body: '這一 bit 不存在。', back: '返回主頁' },
  },
} as const;
