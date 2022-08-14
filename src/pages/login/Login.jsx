import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from 'react';

import PopUpForm from '../../components/forms/PopUpForm';
import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { Errors } from '../../components/forms/form.styled';

const Login = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const changePasswordVisibility = () => {
		isPasswordVisible
			? setIsPasswordVisible(false)
			: setIsPasswordVisible(true);
	};

	const handleLogin = () => {
		//logica de login
	};

	const SignInSchema = Yup.object().shape({
		nome: Yup.string().required('Login obrigatório'),
		senha: Yup.string().required('Por favor digite a sua senha!'),
	});

	return (
		<PopUpForm
			height='400px'
			title='Login'
			externalLink={{ description: 'Não possuo cadastro', path: '/new-user' }}
		>
			<Formik
				initialValues={{
					nome: '',
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
							<label htmlFor='nome'>NOME DE USUÁRIO</label>
							<Field name='nome' placeholder='Nome de usuário' />
							{errors.nome && touched.nome ? (
								<Errors>{errors.nome}</Errors>
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

								<button type='button' onClick={changePasswordVisibility}>
									{isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
								</button>
							</div>
							{errors.senha && touched.senha ? (
								<Errors>{errors.senha}</Errors>
							) : null}
						</div>

						<button>LOGIN</button>
					</Form>
				)}
			</Formik>

			{/* <Link to='/new-user'>Não possuo cadastro</Link> */}
		</PopUpForm>
	);
};
export default Login;
