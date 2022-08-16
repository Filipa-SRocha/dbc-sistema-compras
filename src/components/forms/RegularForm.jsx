import { RegularFormContainer } from './form.styled';

const RegularForm = ({ children, title }) => {
	return (
		<RegularFormContainer>
			<h3>{title}</h3>
			{children}
		</RegularFormContainer>
	);
};
export default RegularForm;
