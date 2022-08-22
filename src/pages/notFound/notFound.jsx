import { NotFoundContainer } from './notFound.style';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<NotFoundContainer>
			<h1>Página Não Encontrada</h1>
			<Link to='/'>Voltar para a página inicial</Link>
		</NotFoundContainer>
	);
};
export default NotFound;
