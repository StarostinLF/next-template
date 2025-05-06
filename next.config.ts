import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	webpack(svg) {
		svg.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return svg;
	},
};

export default nextConfig;
