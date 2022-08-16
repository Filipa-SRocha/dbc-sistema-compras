import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Errors } from '../../components/forms/form.styled';
import { PrimaryButton } from '../../components/buttons/buttons';

const SaleForm = ({ dispatch }) => {
	const handleNewBuy = (values) => {
		const completeSale = { ...values, data: new Date() };
	};

	const SignInSchema = Yup.object().shape({
		name: Yup.string()
			.required('Nome obrigatório')
			.min(2, 'Nome demasiado curto'),
		descricao: Yup.string().required('Por favor introduza uma descrição'),
	});

	return (
		<>
			<h2>Nova compra</h2>

			<Formik
				initialValues={{
					name: '',
					status: 'EM_ANALISE',
					descricao: '',
				}}
				validationSchema={SignInSchema}
				onSubmit={(values) => {
					handleNewBuy(values, dispatch);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div>
							<label htmlFor='name'>Nome: </label>
							<Field name='name' />
							{errors.name && touched.name ? (
								<Errors>{errors.name}</Errors>
							) : null}
						</div>

						<div>
							<label htmlFor='descricao'>Descrção da compra: </label>
							<div>
								<Field name='descricao' />
							</div>
							{errors.descricao && touched.descricao ? (
								<Errors>{errors.descricao}</Errors>
							) : null}
						</div>

						<PrimaryButton text='Solicitar' type='submit' />
					</Form>
				)}
			</Formik>
		</>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(SaleForm);
