import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const positions = [
		{
			company: 'Sandbox Indonesia',
			website: 'https://www.sandboxindonesia.id/',
			jobTitle: 'Fullstack Developer',
			startDate: '2021-05-17',
			endDate: null,
			place: 'Bareng Lor, Klaten Utara, Jawa Tengah, Indonesia',
			description: `* Joined Informa Studios (old name) as a junior backend developer, first with back-end expertise in the fullstack development. (alongside research untill deployment)
* Develop ACTIONS system for university.
* Develop ACTIONS system for elementary school.`,
			technologies: [
				'HTML',
				'CSS',
				'javascript',
				'jQuery',
				'CMS',
				'MySQL',
				'PostgreSQL',
				'Laravolt',
				'Laravel',
			],
		},
		{
			company: 'Pondok Programmer',
			website: 'https://pondokprogrammer.com/',
			jobTitle: 'Mentor Back-End Laravel',
			startDate: '2019-10-07',
			endDate: '2021-01-07',
			place: 'Kretek, Bantul, Yogyakarta, Indonesia',
			description: `* Mentoring students in the Laravel framework. (HTML, CSS, php, mysql, javascript)
* Tech lead for the rebuild of site applications, used by students, and also for the its own internal use.
* Lead for education and training for the students.
* Mentored more junior developers through pair programming, to be the next mentor.`,
			technologies: ['HTML', 'CSS', 'javascript', 'jQuery', 'MySQL', 'Laravel'],
		},
	];

	res.status(200).json({ positions });
};
