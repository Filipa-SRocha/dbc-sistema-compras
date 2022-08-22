import { PrimaryButton } from '../../components/buttons/buttons';
import { handleNewQuotation } from '../../store/actions/quotationAction';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import {
	Errors,
	FormContainer,
} from '../../components/forms/form.styled';
import { FormStyle } from './quotationForm.styled'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

const QuotationForm = ({ purchaseToShow }) => {
	const navigate = useNavigate();

	const reader = new FileReader();

	const [file, setFile] = useState();

	const fileToBase64 = (file) => {

		reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64 = reader.result;
			const anexo = base64.split(",");
		}

	}

	const handleSubmit = (values) => {
		console.log(values);

		const newItems = values.items.map((item, index) => {
			return {
				idItem: purchaseToShow.itens[index].idItem,
				valorDoItem: Number(item),
			};
		});

		const newValues = {
			nome: values.nome,
			listaDeValores: newItems,
			anexo: '',
		};
		handleNewQuotation(purchaseToShow.idCompra, newValues, navigate);

		console.log(values)
		
	};

	const QuoteSchema = Yup.object().shape({
		items: Yup.array().required('Obrigatório preencher o campo de preço'),
		nome: Yup.string()
			.required('Nome obrigatório')
			.max(40, 'Nome demasiado longo. Máx: 40 caracteres')
			.min(2, 'Nome demasiado curto.'),
	});

	// console.log('Formik', purchaseToShow);

	return (
		<Formik
			initialValues={{
				items: purchaseToShow.itens.map(() => ''),
				nome: '',
				anexo: '',
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
							<div className='labelEItemCotacao'>
								<label htmlFor='nome'>Nome da Cotação</label>
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
										<div className='labelEItem' key={index}>
											<label htmlFor={`items.${index}`}>{`Valor (R$) de `}{item.nome}</label>
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

						<div className="button">
							<PrimaryButton text='Cadastrar cotação' type='submit' />
						</div>
					</Form>
				</FormStyle>
			)}
		</Formik>
	);
};

export default QuotationForm;
