import { relative } from 'path';

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => relative(process.cwd(), f))
		.join(' --file ')}`;

const lintStagedConfig = {
	'*.{css,scss}': 'npm run stylelint',
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

export default lintStagedConfig;
