import { Link } from 'react-router-dom';
import {
	Background,
	FormContainer,
	LogoContainer,
	Container,
} from './form.styled';
import Logo from '../../images/logo.png';

const PopUpForm = ({ height, title, externalLink, children }) => {
	console.log('Aqwui', height);
	return (
		<Background>
			<Container height={height}>
				<LogoContainer>
					<img src={Logo} alt='DBC Company Logo' />
				</LogoContainer>
				<h2>{title.toUpperCase()}</h2>
				<FormContainer>{children}</FormContainer>
				<Link to={externalLink.path}>{externalLink.description}</Link>
			</Container>
		</Background>
	);
};
export default PopUpForm;
