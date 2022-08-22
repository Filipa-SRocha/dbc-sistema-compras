import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Errors } from '../../components/forms/form.styled';
import {
	IconButton,
	PrimaryButton,
	SecondaryButton,
} from '../../components/buttons/buttons';
import RegularForm from '../../components/forms/RegularForm';
import {
	handleNewPurchase,
	handleEditPurchase,
} from '../../store/actions/purchaseActions';

const FullPurchaseForm = ({
	idCompra,
	isEditMode,
	purchaseToEdit,
	dispatch,
}) => {
	const navigate = useNavigate();

	const handleSubmit = (values, { resetForm }) => {
		if (isEditMode) {
			const newValues = {
				name: values.name,
				descricao: values.descricao,
				itens: values.items,
			};

			handleEditPurchase(
				newValues,
				purchaseToEdit.idCompra,
				dispatch,
				navigate,
				resetForm
			);

			console.log(resetForm)
		} else {
			handleNewPurchase(values, navigate, resetForm);
		}
	};

	const SaleSchema = Yup.object().shape({
		name: Yup.string()
			.required('Nome obrigatório')
			.min(2, 'Nome demasiado curto'),
		descricao: Yup.string().required('Por favor introduza uma descrição'),
		items: Yup.array(
			Yup.object({
				nome: Yup.string().required('Nome obrigatório'),
				quantidade: Yup.number()
					.required('Quantidade obrigatória')
					.min(1, 'Quantidade mínima: 1'),
			})
		)
			.required('Pelo menos um item obrigatório')
			.min(1),
	});

	return (
		<RegularForm title='Nova Compra'>
			<Formik
				initialValues={{
					name: isEditMode ? purchaseToEdit.name : '',
					status: 'EM_ANALISE',
					valor: 0,
					descricao: isEditMode ? purchaseToEdit.descricao : '',
					items: isEditMode
						? purchaseToEdit.itens
						: [{ nome: '', quantidade: 1, preco: 0 }],
				}}
				validationSchema={SaleSchema}
				enableReinitialize
				onSubmit={(values, resetForm) => {
					handleSubmit(values, resetForm);
				}}
			>
				{({ values, errors, touched }) => (
					<Form>
						<div>
							<div>
								<div>
									<label htmlFor='name'>Nome </label>
									<Field name='name' />
								</div>
								{errors.name && touched.name ? (
									<Errors>{errors.name}</Errors>
								) : null}
							</div>

							<div>
								<div>
									<label htmlFor='descricao'>Descrição da compra </label>
									<Field name='descricao' />
								</div>
								{errors.descricao && touched.descricao ? (
									<Errors>{errors.descricao}</Errors>
								) : null}
							</div>
						</div>
						<FieldArray name='items'>
							{({ push, remove }) => (
								<div>
									<h4>Itens</h4>

									{values.items.map((item, index) => (
										<>
											{/* {console.log(errors.items[index])} */}
											<h5>Item {index + 1}</h5>
											<div className='item-container'>
												<div>
													<label htmlFor=''>Nome</label>
													<Field name={`items[${index}].nome`} />
													{/* {errors.items &&
													errors.items.length > 0 &&
													errors.items[index].nome &&
													touched.items[index].nome ? (
														<Errors>{errors.items[index].nome}</Errors>
													) : null} */}
												</div>
												<div>
													<label htmlFor=''>Quantidade</label>
													<Field
														name={`items[${index}].quantidade`}
														type='number'
														min={1}
													/>
												</div>
												<div>
													<IconButton
														type='button'
														onClick={() => remove(index)}
													/>
												</div>
											</div>
										</>
									))}

									<SecondaryButton
										type='button'
										text='Adicionar Item'
										onClick={() => push({ nome: '', quantidade: 1 })}
									/>
								</div>
							)}
						</FieldArray>

						<PrimaryButton type='submit' text='Finalizar' />
					</Form>
				)}
			</Formik>
		</RegularForm>
	);
};

const mapStateToProps = (state) => ({
	purchaseToEdit: state.purchaseReducer.purchaseToEdit,
	isEditMode: state.purchaseReducer.isEditMode,
});

export default connect(mapStateToProps)(FullPurchaseForm);
