import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'JavaScript',
		'jQuery',
		'SQL',
		'php',
		'git',
		'RESTful APIs',
		'HTML',
		'CSS',
	];
	const frameworks = ['Laravel', 'Vue.js', 'Nuxt.js'];
	const databases = ['MySQL', 'PostgreSQL', 'Firebase'];
	const cms = ['WordPress', 'Statamic'];
	const various = ['SEO', 'Scrum', 'Agile', 'Jira', 'Confluence'];
	const design = ['Canva', 'Gravit', 'Figma'];
	const softSkills = [
		'Leadership',
		'Problem solving',
		'Creative thinking',
		'Flexible and adaptive',
		'Team player',
	];
	const languages = [
		{
			language: 'Javanese',
			level: 'bilingual',
			icon: '🚩',
		},
		{
			language: 'Indonesian',
			level: 'bilingual',
			icon: '🇮🇩',
		},
		{
			language: 'Arabic',
			level: 'intermediate',
			icon: '🇸🇦',
		},
		{
			language: 'English',
			level: 'basic',
			icon: '🇬🇧',
		},
	];

	res.status(200).json({
		technologies,
		frameworks,
		databases,
		cms,
		various,
		design,
		softSkills,
		languages,
	});
};
