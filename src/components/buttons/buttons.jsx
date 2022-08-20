import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { Button, IButton, SButton } from './buttons.styled';

export const PrimaryButton = ({ text, width, color, ...params }) => {
	return <Button {...params}> {text.toUpperCase()}</Button>;
};

export const IconButton = ({ width, action, color, ...params }) => {
	return (
		<IButton {...params}>
			{action === 'edit' ? <BiEdit /> : <RiDeleteBinLine />}
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
