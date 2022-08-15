import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import PopUpForm from '../../components/forms/PopUpForm';
import { Errors } from '../../components/forms/form.styled';
import { PrimaryButton } from '../../components/buttons/buttons';
import VisibilityButton from '../../components/forms/components/visibilityButton/VisibilityButton';

const Login = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const handleLogin = () => {
		//logica de login
	};

	const SignInSchema = Yup.object().shape({
		email: Yup.string()
			.required('Email obrigatório')
			.email('Formato de email inválido'),
		senha: Yup.string().required('Por favor digite a sua senha!'),
	});

	return (
		<PopUpForm
			height='400px'
			externalLink={{ description: 'Não possuo cadastro', path: '/new-user' }}
		>
			<Formik
				initialValues={{
					email: '',
					senha: '',
				}}
				validationSchema={SignInSchema}
				onSubmit={(values) => {
					handleLogin(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div>
							<label htmlFor='email'>Email</label>
							<Field name='email' />
							{errors.email && touched.email ? (
								<Errors>{errors.email}</Errors>
							) : null}
						</div>

						<div>
							<label htmlFor='senha'>SENHA </label>
							<div style={{ marginBottom: 0 }}>
								<Field
									name='senha'
									type={isPasswordVisible ? 'text' : 'password'}
									placeholder='Senha'
								/>

								<VisibilityButton
									setIsPasswordVisible={setIsPasswordVisible}
									isPasswordVisible={isPasswordVisible}
								/>
							</div>
							{errors.senha && touched.senha ? (
								<Errors>{errors.senha}</Errors>
							) : null}
						</div>

						<PrimaryButton text='entrar' type='submit' />
					</Form>
				)}
			</Formik>
		</PopUpForm>
	);
};
export default Login;
