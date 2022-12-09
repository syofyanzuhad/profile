import { FC } from 'react';
import Head from 'next/head';

import website from 'Public/assets/website.png';

export interface HeadProps {
	title: string;
	description: string;
	lang?: string;
	keywords?: string;
	author?: string;
	image?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
}

const SeoHead: FC<HeadProps> = ({
	title,
	description,
	author = 'Syofyan Zuhad',
	keywords,
	image = '/assets/website.png',
	meta,
}) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="canonical" href="https://syofyanzuhad.my.id/" />
			<link
				rel="icon"
				href="https://secure.gravatar.com/avatar/66b4ab4b1c5ee1c71a5dbe20a4c438d9?s=500"
			/>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content="https://syofyanzuhad.my.id/" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content={author} />
			{meta &&
				meta.length > 0 &&
				meta.map(({ name, content }) => (
					<meta name={name} content={content} key={name} />
				))}
			{image && <meta name="og:image" content={image} />}
			{image && <meta name="twitter:image" content={image} />}
			{keywords && <meta name="keywords" content={keywords} />}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"WebSite","name":"Syofyanzuhad.my.id","alternateName":"Syofyan Zuhad","url":"https://syofyanzuhad.my.id/","description":"Back-End Software Engineer with a focus on Laravel and php. I have more than 2 years experience working in software engineering.","image":"${image}"}`,
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"Person","image":"https://res.cloudinary.com/jacobherper/image/upload/v1587315576/jacob_herper.jpg","name":"Syofyan Zuhad","alternateName":"JakeHerp","url":"https://herper.io/","jobTitle":["Senior Software Engineer","Backend Engineer", "Back-End Developer", "Web Developer"],"hasOccupation":{"@type":"Occupation","name":"Senior Software Engineer","occupationLocation":{"@type":"City","name":"London"},"estimatedSalary":[{"@type":"MonetaryAmountDistribution","name":"base","currency":"GBP","duration":"P1H","percentile10":"74","percentile25":"80","median":"90","percentile75":"100","percentile90":"106"}],"description":"Develops web applications and websites using JavaScript, React and HTML5.","skills":"HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce","alternateName":["Backend Developer","Full Stack Developer","Backend Engineer"],"responsibilities":["App Development","Web Design","Website Development","JavaScript Development","WordPress Development","CMS Development","Backend Development","Full Stack Development","Online Marketing","SEO Services","Web Developer","Website Maintenance"]},"sameAs":["http://linkedin.com/in/syofyan-zuhad","http://twitter.com/syofyan_zuhad","https://github.com/syofyanzuhad","https://www.facebook.com/syofyan_zuhad","https://instagram.com/syofyan_zuhad"],"brand":[{"@type":"Brand","name":"Software Engineer","alternateName":"Back-End Engineer"},{"@type":"Brand","name":"Syofyanzuhad","alternateName":"Syofyan Zuhad"}],"memberOf":[{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency"},{"@type":"Organization","url":"https://www.dennis.co.uk/","name":"Dennis Digital","alternateName":"Dennis"}],"homeLocation":{"@type":"City","name":"London"},"owns":{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency","sameAs":"https://www.linkedin.com/company/creativ.agency"},"alumniOf":{"@type":"Organization","url":"https://www.thespecialistworks.com/","name":"The Specialist Works"},"nationality":{"@type":"Country","name":"Germany"},"birthDate":"1990-11-06","birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Oelsnitz","postalCode":"08606","addressCountry":"Germany"}},"parent":[{"name":"Norbert Herper","jobTitle":"Chef","birthDate":"1967-08-22"},{"name":"Anne-Kristin Herper","birthDate":"1968-02-26"}],"spouse":{"name":"Cinthia Cid Paz","birthDate":"1990-09-19","nationality":{"@type":"Country","name":"Mexico"},"birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Toluca","addressCountry":"Mexico"}}}}`,
				}}
			/>
			<script async src="https://cdn.splitbee.io/sb.js"></script>
		</Head>
	);
};

export { SeoHead };
