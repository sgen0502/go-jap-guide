// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://go-jap-guide.pages.dev',
    base: '/',
    integrations: [
        starlight({
            title: 'ゴッデスオーダー初心者ガイド（仮）',
            customCss: [
                // Path to your Tailwind base styles:
                './src/styles/global.css',
            ],
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            components: {
                PageTitle: './src/components/overrides/PageTitle.astro',
                ContentPanel: './src/components/overrides/ContentPanel.astro',
            },
            sidebar: [
                {
                    label: '初めに',
                    items: [
                        { label: 'どんなゲーム？', slug: 'guides/what-game' },
                        { label: 'よくある質問', slug: 'guides/faq' },
                        { label: '初心者ガイド', slug: 'guides/getting-started' },
                        { label: '攻略が詰まったら・・・', slug: 'guides/what-to-do' },
                    ],
                },
                {
                    label: 'Tier表',
                    autogenerate: { directory: 'tier' },
                },
                {
                    label: 'キャラ',
                    items: [
                        {label: 'SSR', autogenerate: { directory: 'character/SSR' }},
                        {label: 'SR', autogenerate: { directory: 'character/SR' }},
                    ]
                    
                },
            ],
        }),
    ],
    vite: {
      assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif'],
      server: {
          fs: {
              strict: false,
          },
          watch: {
              usePolling: true,      // ← 監視をポーリング方式に
              interval: 200,         // ← 読み取り間隔（少し多めでもOK）
          },
      },
      plugins: [tailwindcss()],
    },
});