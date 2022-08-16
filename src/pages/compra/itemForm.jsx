import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Errors } from '../../components/forms/form.styled';
import { PrimaryButton } from '../../components/buttons/buttons';
import RegularForm from '../../components/forms/RegularForm';

const ItemForm = ({ dispatch }) => {
	const ItemSchema = Yup.object().shape({
		nome: Yup.string()
			.required('Nome obrigatório')
			.min(2, 'Nome demasiado curto'),
		quantidade: Yup.number()
			.required('Por favor introduza uma quantidade')
			.min(1, 'Quantidade mínima: 1'),
	});

	const handleNewItem = () => {};

	return (
		<RegularForm title='Nova Compra'>
			<Formik
				initialValues={{
					nome: '',
					quantidade: 0,
				}}
				validationSchema={ItemSchema}
				onSubmit={(values) => {
					handleNewItem(values, dispatch);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div>
							<label htmlFor='nome'>Nome: </label>
							<Field name='nome' />
							{errors.nome && touched.nome ? (
								<Errors>{errors.nome}</Errors>
							) : null}
						</div>

						<div>
							<label htmlFor='quantidade'>Quantidade: </label>
							<div>
								<Field type='number' name='quantidade' />
							</div>
							{errors.quantidade && touched.quantidade ? (
								<Errors>{errors.quantidade}</Errors>
							) : null}
						</div>

						<PrimaryButton text='Adicionar' type='submit' />
					</Form>
				)}
			</Formik>
		</RegularForm>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(ItemForm);
