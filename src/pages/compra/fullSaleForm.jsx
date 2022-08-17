import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Errors } from '../../components/forms/form.styled';
import {
	IconButton,
	PrimaryButton,
	SecondaryButton,
} from '../../components/buttons/buttons';
import RegularForm from '../../components/forms/RegularForm';

const FullSaleForm = ({ dispatch }) => {
	const handleNewBuy = (values) => {
		console.log('newBuy');
		console.log(values);
	};

	const fim = (values) => {
		console.log('valores finais:', values);
	};

	const SaleSchema = Yup.object().shape({
		name: Yup.string()
			.required('Nome obrigatório')
			.min(2, 'Nome demasiado curto'),
		descricao: Yup.string().required('Por favor introduza uma descrição'),
	});

	return (
		<RegularForm title='Nova Compra'>
			<Formik
				initialValues={{
					name: '',
					status: 'EM_ANALISE',
					descricao: '',
					items: [{ nome: '', quantidade: 1 }],
				}}
				validationSchema={SaleSchema}
				onSubmit={(values) => {
					handleNewBuy(values, dispatch);
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
											<h5>Item {index}</h5>
											<div className='item-container'>
												<div>
													<label htmlFor=''>Nome</label>
													<Field name={`items[${index}].nome`} />
												</div>
												<div>
													<label htmlFor=''>Quandidade</label>
													<Field name={`items[${index}].quantidade`} />
												</div>
												<div>
													<IconButton onClick={() => remove(index)} />
												</div>
											</div>
										</>
									))}

									<SecondaryButton
										text='Adicionar Item'
										onClick={() => push({ nome: '', quantidade: 1 })}
									/>
									{/* <PrimaryButton
										text='Adicionar Item'
										onClick={() => push({ nome: '', quantidade: 1 })}
									/> */}
								</div>
							)}
						</FieldArray>

						<PrimaryButton
							text='Finalizar'
							onClick={() => {
								fim(values);
							}}
						/>
					</Form>
				)}
			</Formik>
		</RegularForm>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(FullSaleForm);
