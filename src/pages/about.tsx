import absoluteUrl from 'next-absolute-url';
import { differenceInCalendarYears } from 'date-fns';
import { fetcher } from 'Utils/fetcher';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { useState } from 'react';

import { IEducation, IJob } from '@Types';

import { Container } from 'Atoms/Container';
import { Education } from 'Atoms/Education';
import { Position } from 'Atoms/Position';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	jobs: IJob[];
	education: IEducation[];
}

function About({ jobs, education }: IProps) {
	const [loadedJobs, setLoadedJobs] = useState(2);

	const loadMore = () => {
		setLoadedJobs((prev) => prev + 3);
	};

	return (
		<>
			<SeoHead
				title="About Syofyan Zuhad - Backend-End Developer"
				description="As a passionate back-end developer, I create amazing websites and web apps to make the internet a better place."
			/>

			<Container>
				<Headline>Hey, I&apos;m Syofyan Zuhad</Headline>
				<h3>An intermediate web developer from Indonesia</h3>
				<p>
					As a passionate back-end developer, I create amazing websites and web
					apps to make the internet a better place. I am an open-sourece
					enthusiast with a magic (artisan) touch inside like{' '}
					<a href="https://laravel.com">Laravel</a>.
				</p>
				<p>
					I am {differenceInCalendarYears(new Date(), new Date('1999-01-22'))}{' '}
					years old and have been a web developer for as long as I can think.
					The technologies I work with are JavaScript, HTML, CSS and php with a
					focus on the frameworks Laravel, Nuxt.js, Tailwind. I use code not
					only to do my day-to-day job, but also to solve everyday problems I
					come across.
				</p>
				<p>
					When I am not writing code I love to spend time at room in Klaten or
					travelling around the world. I speak four languages: indonesian,
					javanese, arabic, english (some better than others). Furthermore I
					enjoy watching movie when I come home after a long day at the office.
				</p>

				<h2>Experience</h2>
				{jobs.slice(0, loadedJobs).map((job, i) => (
					<Position job={job} key={job.company + i} />
				))}
				<Center>
					{loadedJobs < jobs.length && (
						<button onClick={loadMore}>Load more</button>
					)}
				</Center>

				<h2>Education</h2>
				{education.map((edu) => (
					<Education education={edu} key={edu.course} />
				))}

				<Center>
					<a href="/Curriculum Vitae.pdf" target="_blank">
						Download a copy of my CV
					</a>
				</Center>
			</Container>
		</>
	);
}

const Headline = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;

	@media screen and (min-width: 768px) {
		font-size: 3rem;

		span {
			display: inline-block;
		}

		@keyframes wave {
			0% {
				transform: rotate(0);
			}
			50% {
				transform: rotate(-10deg);
			}
			100% {
				transform: rotate(10deg);
			}
		}

		&:hover span {
			animation: wave 0.5s ease infinite;
		}
	}
`;

const Center = styled.div`
	text-align: center;
	font-weight: bold;
	margin-top: 2rem;

	button {
		display: block;
		margin: 2rem auto;
		border: 2px solid ${({ theme }) => theme.text};
		color: ${({ theme }) => theme.text};
		padding: 0.5rem 3rem;
		border-radius: 5px;
		background: transparent;
	}
`;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { origin } = absoluteUrl(req);
	const { positions } = await fetcher(`${origin}/api/jobs`);
	const { education } = await fetcher(`${origin}/api/education`);
	const skills = await fetcher(`${origin}/api/skills`);

	return {
		props: {
			jobs: positions,
			education,
			skills,
		},
	};
};

export default About;
