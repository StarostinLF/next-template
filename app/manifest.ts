import type { MetadataRoute } from 'next';

import { getPageUrl } from '@/lib/get-page-url';
import { DESCRIPTION, SITE_NAME } from '@/lib/constants';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
	const { baseUrl } = await getPageUrl();

	return {
		name: SITE_NAME,
		short_name: 'Next.js',
		description: DESCRIPTION,
		start_url: baseUrl,
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/images/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/images/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
