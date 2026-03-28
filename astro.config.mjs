// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

// ビルド時にブログ記事のフロントマターから日付マップを構築
function buildDateMap() {
	const blogDir = path.resolve('./src/content/blog');
	if (!fs.existsSync(blogDir)) return {};
	const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
	const map = {};
	for (const file of files) {
		const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
		const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
		if (!fmMatch) continue;
		const fm = fmMatch[1];
		const updatedMatch = fm.match(/^updatedDate:\s*(.+)$/m);
		const pubMatch = fm.match(/^pubDate:\s*(.+)$/m);
		const dateStr = (updatedMatch || pubMatch)?.[1]?.replace(/['"]/g, '');
		if (dateStr) {
			const slug = file.replace(/\.(mdx?|md)$/, '');
			map[slug] = new Date(dateStr).toISOString();
		}
	}
	return map;
}

const blogDateMap = buildDateMap();
const buildDate = new Date().toISOString();

// https://astro.build/config
export default defineConfig({
	site: 'https://ai-to-kurasu.dev',
	trailingSlash: 'always',
	adapter: cloudflare({
		platformProxy: { enabled: true },
		imageService: 'passthrough',
	}),
	build: {
		format: 'directory',
	},
	integrations: [
		mdx(),
		sitemap({
			serialize(item) {
				const blogMatch = item.url.match(/\/blog\/([^/]+)\/$/);
				if (blogMatch && blogDateMap[blogMatch[1]]) {
					item.lastmod = blogDateMap[blogMatch[1]];
				} else {
					item.lastmod = buildDate;
				}
				return item;
			},
		}),
		react(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
