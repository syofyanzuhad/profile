import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'HTML',
		'CSS',
		'php',
		'JavaScript',
		'jQuery',
		'SQL',
		'RESTful API',
		'git',
	];
	const frameworks = ['Laravel', 'Nextjs', 'Nuxtjs'];
	const databases = ['MySQL', 'PostgreSQL', 'SQLite'];
	const cms = ['WordPress', 'Statamic'];
	const various = ['SEO', 'Scrum', 'Agile', 'Jira', 'Github'];
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
