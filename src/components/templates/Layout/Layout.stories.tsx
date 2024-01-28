import { Layout } from './Layout';

export default {
	title: 'templates/Layout',
	component: Layout,
};

interface LayoutStoryProps {
	children: React.ReactNode;
}

export const LayoutStory = ({ children }: LayoutStoryProps) => (
	<Layout>${children}</Layout>
);

LayoutStory.storyName = 'Layout';
LayoutStory.args = {};
