import type { MetadataRoute } from 'next';

import { getPageUrl } from '@/lib/get-page-url';

export default async function robots(): Promise<MetadataRoute.Robots> {
	const { baseUrl } = await getPageUrl();

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: [
				'/login',
				'/recovery',
				'/register',
				'/profile',
				'/privacy-policy',
			],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
