import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';

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
		login: Yup.string().required('Login obrigatório'),
		senha: Yup.string().required('Por favor digite a sua senha!'),
	});

	return (
		<>
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
							{errors.nome && touched.nome ? <div>{errors.nome}</div> : null}
						</div>

						<div>
							<label htmlFor='senha'>SENHA </label>
							<div style={{ margin: 0 }}>
								<Field
									name='senha'
									type={isPasswordVisible ? 'text' : 'password'}
									placeholder='Senha'
								/>

								<button type='button' onClick={changePasswordVisibility}>
									{isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
								</button>
							</div>
							{errors.senha && touched.senha ? <div>{errors.senha}</div> : null}
						</div>

						<button>LOGIN</button>
					</Form>
				)}
			</Formik>

			<Link to='/new-user'>Não possuo cadastro</Link>
		</>
	);
};
export default Login;
