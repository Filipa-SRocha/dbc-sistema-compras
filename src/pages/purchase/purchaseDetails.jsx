import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import PopUpForm from '../../components/forms/PopUpForm';
import { Errors } from '../../components/forms/form.styled';
import { Formik, Form, Field } from 'formik';
import { PrimaryButton } from '../../components/buttons/buttons';
import * as Yup from 'yup';
import {
	Container,
	InfoContainer,
	ItemsContainer,
} from './purchaseDetails.styled';

const QuoteForm = () => {
	const handleSubmit = () => {};

	const SignInSchema = Yup.object().shape({
		email: Yup.string()
			.required('Email obrigatório')
			.email('Formato de email inválido')
			.matches(
				/^[A-Za-z0-9.%+-]+@dbccompany\.com\.br$/gm,
				'Formato inválido. Ex: nome@dbccompany.com.br'
			),
		password: Yup.string().required('Por favor digite a sua senha!'),
	});

	return (
		<PopUpForm title='Nova Cotação'>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={SignInSchema}
				onSubmit={(values) => {
					handleSubmit(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div>
							<label htmlFor='email'>Email</label>
							<Field name='email' />
							{errors.email && touched.email ? (
								<Errors>{errors.email}</Errors>
							) : null}
						</div>

						<div>
							<label htmlFor='password'>Senha </label>
							<div style={{ marginBottom: 0 }}>
								<Field name='password' placeholder='password' />
							</div>
							{errors.password && touched.password ? (
								<Errors>{errors.password}</Errors>
							) : null}
						</div>

						<PrimaryButton text='entrar' type='submit' />
					</Form>
				)}
			</Formik>
		</PopUpForm>
	);
};

const PurchaseDetails = ({ dispatch, purchaseToShow }) => {
	const { idCompra } = useParams();
	//checkar o tipo de usuario, se for comprador
	const variavelTesteComprador = true;
	const variavelTesteNovaCotacao = true;

	return (
		<DashboardPage title='Solicitação de Compra' page='#'>
			<Container>
				<InfoContainer>
					<h3>{purchaseToShow.name}</h3>
					<p>{purchaseToShow.descricao}</p>
				</InfoContainer>
				<ItemsContainer>
					<h4>Itens</h4>
					{purchaseToShow.itens ? (
						purchaseToShow.itens.map((item) => (
							<p key={item.idItem}>
								{item.quantidade} {item.nome}
							</p>
						))
					) : (
						<p>Não existem itens cadastrados!</p>
					)}
				</ItemsContainer>
				<div>
					<h4>Cotações</h4>
					<div>...cotaçoes</div>
				</div>
			</Container>
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchaseToShow: state.purchaseReducer.purchaseToShow,
});

export default connect(mapStateToProps)(PurchaseDetails);
