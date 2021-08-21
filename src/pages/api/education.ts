import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const education = [
		{
			institute: 'Islamic Institution of Information and Technologies',
			website: 'https://pondokprogrammer.com/',
			course: 'Pondok Programmer',
			endDate: '2021-06-20',
			place: 'boarding school',
			technologies: [
				'HTML',
				'CSS',
				'Javascript',
				'php',
				'Laravel',
				'Algorithms',
				'Data Structures',
			],
		},
		{
			institute: 'Darussalam Gontor, Modern Islamic Institution',
			website: 'https://gontor.ac.id/',
			course: 'Islmic Teacher Training College',
			endDate: '2018-06-30',
			place: 'boarding school',
			technologies: ['Life teaching'],
		},
	];

	res.status(200).json({ education });
};
