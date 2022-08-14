import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { Button } from './visibilityButton.style';

const VisibilityButton = ({ setIsPasswordVisible, isPasswordVisible }) => {
	const changePasswordVisibility = () => {
		isPasswordVisible
			? setIsPasswordVisible(false)
			: setIsPasswordVisible(true);
	};

	return (
		<Button type='button' onClick={changePasswordVisibility}>
			{isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
		</Button>
	);
};
export default VisibilityButton;
