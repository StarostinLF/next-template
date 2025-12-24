import './styles/tailwind.css';
import './styles/globals.scss';

import type { Metadata } from 'next';

import { getPageUrl } from '@/lib/get-page-url';
import { SITE_NAME, DESCRIPTION } from '@/lib/constants';
import { mainFont } from '@/lib/fonts';

export async function generateMetadata(): Promise<Metadata> {
	const { baseUrl } = await getPageUrl();

	return {
		title: {
			template: `%s | ${SITE_NAME}`,
			default: SITE_NAME,
		},
		description: DESCRIPTION,
		generator: 'Next.js',
		applicationName: 'Next.js Template',
		referrer: 'origin-when-cross-origin',
		keywords: ['Next.js', 'React', 'TypeScript', 'Frontend'],
		authors: [{ name: '', url: `${baseUrl}` }],
		creator: '',
		publisher: '',
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		metadataBase: new URL(`${baseUrl}`),
		openGraph: {
			title: {
				template: `%s | ${SITE_NAME}`,
				default: SITE_NAME,
			},
			description: DESCRIPTION,
			url: baseUrl,
			siteName: SITE_NAME,
			images: [
				{
					url: '/og.png',
					width: 800,
					height: 600,
				},
				{
					url: '/og-altpng',
					width: 1800,
					height: 1600,
					alt: 'My custom alt',
				},
			],
			videos: [
				{
					url: '/video.p4',
					width: 800,
					height: 600,
				},
			],
			audio: [
				{
					url: '/audio.p3',
				},
			],
			locale: 'ru_RU',
			type: 'website',
		},
		robots: {
			index: true,
			follow: true,
			nocache: false,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		manifest: `${baseUrl}/manifest.webmanifest`,
		verification: {
			google: 'google',
			yandex: 'yandex',
			yahoo: 'yahoo',
		},
		alternates: {
			canonical: baseUrl,
			languages: {
				'en-US': `${baseUrl}/en`,
				'ru-RU': `${baseUrl}/ru`,
			},
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={'h-full min-h-dvh scroll-smooth'} lang={'ru'}>
			<body
				className={`${mainFont.className} flex h-full min-h-dvh flex-col scroll-smooth text-sm text-black antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
