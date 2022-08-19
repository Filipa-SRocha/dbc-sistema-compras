import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import PopUpForm from '../../components/forms/PopUpForm';
import { Errors } from '../../components/forms/form.styled';
import { Formik, Form, Field, FieldArray } from 'formik';
import { PrimaryButton } from '../../components/buttons/buttons';
import * as Yup from 'yup';
import {
	Container,
	InfoContainer,
	ItemsContainer,
	FormContainer,
	CotacoesContainer,
} from './purchaseDetails.styled';

const QuoteForm = ({ purchaseToShow, dispatch }) => {
	const handleSubmit = () => {};

	const QuoteSchema = Yup.object().shape({
		items: Yup.array().required('Obrigatório preencher o campo de preço'),
	});

	return (
		<FormContainer title='Nova Cotação'>
			<Formik
				initialValues={{
					items: [{ nome: 'Teste cotação', price: '' }],
				}}
				validationSchema={QuoteSchema}
				enableReinitialize
				onSubmit={(values, resetForm) => {
					handleSubmit(values, resetForm);
				}}
			>
				{({ values, errors, touched }) => (
					<Form>
						<FieldArray name='items'>
							{({ push, remove }) => (
								<div>
									<h4>Itens</h4>

									{values.items.map((item, index) => (
										<>
											<h5>Item {index + 1}</h5>
											<div className='item-container'>
												<div>
													<label htmlFor='price'>Preço </label>
													<Field name={`items[${index}].price`} />
												</div>
											</div>
										</>
									))}
								</div>
							)}
						</FieldArray>

						<PrimaryButton text='Aceitar' type='submit' />
					</Form>
				)}
			</Formik>
		</FormContainer>
	);
};

const PurchaseDetails = ({ dispatch, purchaseToShow }) => {
	const { idCompra } = useParams();
	//checkar o tipo de usuario, se for comprador
	const variavelTesteComprador = false;
	const variavelTesteNovaCotacao = false;

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
				<FormContainer>
					<h4>Nova Cotação</h4>
					<QuoteForm />
				</FormContainer>
				<CotacoesContainer>
					<h4>Todas as cotações</h4>
					...cotações
				</CotacoesContainer>
			</Container>
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchaseToShow: state.purchaseReducer.purchaseToShow,
});

export default connect(mapStateToProps)(PurchaseDetails, QuoteForm);
