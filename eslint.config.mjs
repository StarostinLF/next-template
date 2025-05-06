import { FlatCompat } from '@eslint/eslintrc';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
	{
		rules: {
			'@typescript-eslint/no-empty-object-type': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-undef': 'off',
			'no-unused-vars': 'warn',
			'no-useless-escape': 'off',
			'react-hooks/exhaustive-deps': 'warn',
			'react-hooks/rules-of-hooks': 'error',
			'react/jsx-sort-props': [
				'warn',
				{
					callbacksLast: true,
					noSortAlphabetically: false,
					reservedFirst: true,
					shorthandFirst: false,
					shorthandLast: true,
				},
			],
		},
	},
];

export default eslintConfig;
