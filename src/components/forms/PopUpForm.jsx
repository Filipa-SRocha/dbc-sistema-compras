import { Link } from 'react-router-dom';
import {
	Background,
	PopUpFormContainer,
	LogoContainer,
	Container,
} from './form.styled';
import Logo from '../../images/logo.png';

const PopUpForm = ({ height, title, externalLink, children }) => {
	return (
		<Background>
			<Container height={height}>
				<LogoContainer>
					<img src={Logo} alt='DBC Company Logo' />
					<h1>Sistema de Compras</h1>
				</LogoContainer>
				{title ? <h2>{title.toUpperCase()}</h2> : null}
				<PopUpFormContainer>{children}</PopUpFormContainer>
				{externalLink && (
					<Link to={externalLink.path}>{externalLink.description}</Link>
				)}
			</Container>
		</Background>
	);
};
export default PopUpForm;
