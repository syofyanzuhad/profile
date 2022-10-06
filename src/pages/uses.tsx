import Image from 'next/image';
import styled from 'styled-components';

import { Container } from 'Atoms/Container';
import { List } from 'Atoms/List';
import { SeoHead } from 'Atoms/SeoHead';

import desk from 'Public/assets/laptop.jpg';

function Home() {
	return (
		<>
			<SeoHead
				title="Syofyan Zuhad Uses ... - Back-End Developer"
				description="This is a list of tech equipment I currently use for my day-to-day work as a web developer."
			/>

			<Container>
				<Headline>/uses</Headline>
				<p>
					This is a list of tech equipment I currently use for my day-to-day
					work as a software engineer. I prefer to work remotely. That&apos;s
					why I only use the laptop as the main tool. Sometimes I use supporting
					devices such as a mouse, keyboard, in-ear earphones, and headset.
				</p>
				<Image
					src={desk}
					width={1920}
					height={1080}
					alt="A photo of my desk"
					placeholder="blur"
				/>
				<h3>Computer & Hardware</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://icecat.biz/p/lenovo/232036s/thinkpad-notebooks-x230-14595012.html"
								target="_blank"
								rel="noopener noreferrer"
							>
								Lenovo ThinkPad X230 i5-3320M&quot;
							</a>
						</strong>{' '}
						(2.6 GHz i5 CPU, 12 GB Ram, 512GB SSD storage)
					</li>
					<li>
						<strong>
							<a
								href="https://www.robotpowerbank.co.id/product-page/combokeyboardmousekm3000"
								target="_blank"
								rel="noopener noreferrer"
							>
								Keyboard Mouse Combo ROBOT KM3000
							</a>
						</strong>{' '}
						Combo wireless
					</li>
					<li>
						<strong>
							<a
								href="https://kz-audio.com/kz-edx.html"
								target="_blank"
								rel="noopener noreferrer"
							>
								Knowledge Zenith EDX
							</a>
						</strong>{' '}
						In-ear Earphone
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/3fxf7Pr"
								target="_blank"
								rel="noopener noreferrer"
							>
								Rexus M1
							</a>
						</strong>{' '}
						Headset Bloetooth 5.0
					</li>
					<li>
						<strong>
							<a
								href="https://www.mi.co.id/id/product/redmi-note-10-5g"
								target="_blank"
								rel="noopener noreferrer"
							>
								Redmi Note 10 5G
							</a>
						</strong>{' '}
						(8 GB RAM, 128 GB Storage)
					</li>
				</List>
				<h3>Development Tools</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://code.visualstudio.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								VS Code
							</a>
						</strong>{' '}
						with the{' '}
						<strong>
							<a
								href="https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sublime Monokai
							</a>
						</strong>{' '}
						dark theme and{' '}
						<strong>
							<a
								href="https://github.com/tonsky/FiraCode"
								target="_blank"
								rel="noopener noreferrer"
							>
								Fira Code
							</a>
						</strong>{' '}
						font
					</li>
					<li>
						<strong>
							<a
								href="https://github.com/features/copilot"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github Copilot
							</a>
						</strong>{' '}
						AI Helper
					</li>
					<li>
						<strong>
							<a
								href="https://git-scm.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Git
							</a>
						</strong>{' '}
						version control
					</li>
					<li>
						<strong>
							<a
								href="https://www.postman.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Postman
							</a>
						</strong>{' '}
						to test REST and GraphQL API&apos;s
					</li>
				</List>
				<h3>Design Tools</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://www.figma.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Figma
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a
								href="https://canva.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Canva
							</a>
						</strong>
					</li>
				</List>
				<h3>Productivity Tools</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://www.notion.so/?r=008f1f1395694a2594659c43f8d666d8"
								target="_blank"
								rel="noopener noreferrer"
							>
								Notion
							</a>
						</strong>{' '}
						for notes and to-do lists
					</li>
					<li>
						<strong>
							<a
								href="https://www.atlassian.com/software/jira"
								target="_blank"
								rel="noopener noreferrer"
							>
								Jira
							</a>
						</strong>{' '}
						for project management
					</li>
					<li>
						<strong>
							<a
								href="https://discord.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Discord
							</a>
						</strong>{' '}
						for communication
					</li>
					<li>
						<strong>
							<a
								href="https://workspace.google.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Google Workspace
							</a>
						</strong>{' '}
						for email, calendars and Google Drive
					</li>
				</List>
				<h3>Various other software</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://www.google.co.id/intl/id/chrome/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Google Chrome
							</a>
						</strong>{' '}
						still using for entire devices
					</li>
				</List>{' '}
			</Container>
		</>
	);
}

const Headline = styled.h2`
	font-size: 2rem;

	span {
		display: none;
	}

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

export default Home;
