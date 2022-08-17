import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { Button, IButton, SButton } from './buttons.styled';

export const PrimaryButton = ({ text, width, color, ...params }) => {
	return <Button {...params}> {text.toUpperCase()}</Button>;
};

export const IconButton = ({ width, color, ...params }) => {
	return (
		<IButton {...params}>
			<RiDeleteBinLine />
		</IButton>
	);
};

export const SecondaryButton = ({ width, color, ...params }) => {
	return (
		<SButton {...params}>
			<AiOutlinePlus />
		</SButton>
	);
};
