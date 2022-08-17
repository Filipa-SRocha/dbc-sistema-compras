import { Formik, Form, Field, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Errors } from '../../components/forms/form.styled';
import { PrimaryButton } from '../../components/buttons/buttons';
import RegularForm from '../../components/forms/RegularForm';
import { RiContactsBookUploadLine } from 'react-icons/ri';

const ItemForm = ({ dispatch }) => {
	const [items, setItems] = useState([{ nome: '', quantidade: '' }]);

	const ItemSchema = Yup.object().shape({
		nome: Yup.string()
			.required('Nome obrigatório')
			.min(2, 'Nome demasiado curto'),
		quantidade: Yup.number()
			.required('Por favor introduza uma quantidade')
			.min(1, 'Quantidade mínima: 1'),
	});

	const addItem = (e) => {
		e.preventDefault();
		const newState = [...items];
		newState.push({ nome: '', quantidade: '' });
		setItems(newState);
	};

	const envioGeral = (e, values) => {
		e.preventDefault();
		// console.log('geral');
		// console.log(values);
		// console.log(items);
	};

	const handleNewItem = (values) => {
		console.log(values);
	};

	return (
		<>
			{items.map((item, index) => (
				<RegularForm title={`Item #${index + 1}`} key={`item-${index}`}>
					<Formik
						initialValues={items[index]}
						validationSchema={ItemSchema}
						onSubmit={(values) => {
							handleNewItem(values, dispatch);
						}}
						index={index}
					>
						{({ errors, touched }) => (
							<Form>
								<div>
									<div>
										<div>
											<label htmlFor='nome'>Nome: index </label>
											<Field name='nome' />
										</div>
										{errors.nome && touched.nome ? (
											<Errors>{errors.nome}</Errors>
										) : null}
									</div>

									<div>
										<div>
											<label htmlFor='quantidade'>Quantidade: </label>
											<Field type='number' name='quantidade' />
										</div>
										{errors.quantidade && touched.quantidade ? (
											<Errors>{errors.quantidade}</Errors>
										) : null}
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</RegularForm>
			))}
			<PrimaryButton text='Adicionar Item' onClick={addItem} />
		</>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(ItemForm);
