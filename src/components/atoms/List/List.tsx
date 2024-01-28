import { FC } from 'react';
import { StyledList } from './styles';

interface ListProps {
	children: React.ReactNode;
}

const List: FC<ListProps> = ({ children }) => {
	return <StyledList>{children}</StyledList>;
};

export { List };
