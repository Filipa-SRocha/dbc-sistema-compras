import { Button } from './buttons.styled';

export const PrimaryButton = ({ text, width, color, ...params }) => {
	return <Button {...params}> {text.toUpperCase()}</Button>;
};

export const SecondaryButton = () => {};
