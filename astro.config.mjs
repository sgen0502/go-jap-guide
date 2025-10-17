// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ゴッデスオーダー（仮）',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
});
