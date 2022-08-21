import { PrimaryButton } from '../../components/buttons/buttons';
import { handleNewQuotation } from '../../store/actions/quotationAction';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import {
	Errors,
	FormContainer,
	FormStyle,
} from '../../components/forms/form.styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuotationForm = ({ purchaseToShow }) => {
	const navigate = useNavigate();
	useEffect(() => {
		console.log(purchaseToShow);
	});

	const handleSubmit = (values) => {
		const newItems = values.items.map((item) => {
			return { idItem: item.idItem, valorDoItem: Number(item.preco) };
		});

		const newValues = {
			nome: values.nome,
			listaDeValores: newItems,
			anexo: 'string',
		};
		handleNewQuotation(purchaseToShow.idCompra, newValues, navigate);
	};

	const QuoteSchema = Yup.object().shape({
		items: Yup.array().required('Obrigatório preencher o campo de preço'),
		nome: Yup.string()
			.required('Nome obrigatório')
			.max(40, 'Nome demasiado longo. Máx: 40 caracteres')
			.min(2, 'Nome demasiado curto.'),
	});

	return (
		<Formik
			initialValues={{
				items: purchaseToShow ? [...purchaseToShow.itens] : [],
				nome: '',
			}}
			validationSchema={QuoteSchema}
			enableReinitialize
			onSubmit={(values, resetForm) => {
				handleSubmit(values, resetForm);
			}}
		>
			{({ values, errors, touched }) => (
				<FormStyle>
					<Form>
						<div>
							<div>
								<label htmlFor='nome'>Nome da Cotação </label>
								<Field name='nome' id='nome' />
							</div>
							{errors.nome && touched.nome ? (
								<Errors>{errors.nome}</Errors>
							) : null}
						</div>
						<FieldArray name='items'>
							{() => (
								<>
									{values.items.map((item, index) => (
										<div className='itens'>
											<label htmlFor={`items[${index}].preco`}>
												{item.nome}
											</label>
											<Field
												id={`items[${index}].preco`}
												name={`items[${index}].preco`}
											/>
										</div>
									))}
								</>
							)}
						</FieldArray>

						<PrimaryButton text='Aceitar' type='submit' />
					</Form>
				</FormStyle>
			)}
		</Formik>
	);
};

export default QuotationForm;
