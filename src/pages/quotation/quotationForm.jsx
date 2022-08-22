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

	console.log(purchaseToShow.itens[0])

	const handleSubmit = (values) => {

		console.log(values)

		const newItems = values.items.map((item, index) => {
			return { idItem: purchaseToShow.itens[index].idItem, valorDoItem: Number(item) };
		});

		console.log(newItems)

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

	console.log('Formik', purchaseToShow);

	return (
		<Formik
			initialValues={{
<<<<<<< HEAD
				items:
					purchaseToShow.cotacoes.length > 0
						? [...purchaseToShow.cotacoes[0].itemValorizadoDTOS]
						: [],
=======
				items: purchaseToShow.itens.map(() => ''),
>>>>>>> d6ba23caf7b361f96ce3f21ac8a202168116411a
				nome: '',
			}}
			validationSchema={QuoteSchema}
			enableReinitialize
			onSubmit={(values, resetForm) => {
				handleSubmit(values, resetForm);
				// console.log(values)
			}}
		>
			{({ values, errors, touched, setFieldValue }) => (
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
									{purchaseToShow.itens.map((item, index) => (
										<div className='itens' key={index}>
											<label htmlFor={`items.${index}`}>
												{item.nome}
											</label>
											<Field
												id={`items.${index}`}
												name={`items.${index}`}
												// onChange={(e) => {setFieldValue(`items[${index}].preco`, e.target.value)}}
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
