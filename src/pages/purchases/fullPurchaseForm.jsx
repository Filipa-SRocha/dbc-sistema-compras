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
import { handleNewPurchase } from '../../store/actions/purchaseActions';

const FullPurchaseForm = ({ dispatch }) => {
	const navigate = useNavigate();

	const SaleSchema = Yup.object().shape({
		name: Yup.string()
			.required('Nome obrigatório')
			.min(2, 'Nome demasiado curto'),
		descricao: Yup.string().required('Por favor introduza uma descrição'),
		items: Yup.array(
			Yup.object({
				nome: Yup.string().required('Nome obrigatório'),
			})
		).min(1),
	});

	return (
		<RegularForm title='Nova Compra'>
			<Formik
				initialValues={{
					name: '',
					status: 'EM_ANALISE',
					valor: 0,
					descricao: '',
					items: [{ nome: '', quantidade: 1 }],
				}}
				validationSchema={SaleSchema}
				onSubmit={(values) => {
					handleNewPurchase(values, navigate);
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
											{/* {console.log(errors.items[index].nome)} */}
											<h5>Item {index}</h5>
											<div className='item-container'>
												<div>
													<label htmlFor=''>Nome</label>
													<Field name={`items[${index}].nome`} />
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
													<IconButton onClick={() => remove(index)} />
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
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(FullPurchaseForm);
