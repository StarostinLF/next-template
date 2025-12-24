import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter, Roboto } from 'next/font/google';

export const mainFont: NextFont = Inter({ subsets: ['latin'] });
export const titleFont: NextFont = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
});
