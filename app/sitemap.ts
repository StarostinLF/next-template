import type { MetadataRoute } from 'next';

import { getPageUrl } from '@/lib/get-page-url';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { baseUrl } = await getPageUrl();

	return [
		{
			url: `${baseUrl}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	];
}
