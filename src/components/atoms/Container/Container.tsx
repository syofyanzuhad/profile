// import { FC } from 'react';
import { StyledContainer } from './styles';
interface ContainerProps {
	children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export { Container };
