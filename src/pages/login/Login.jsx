import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../../store/actions/authActions';

import PopUpForm from '../../components/forms/PopUpForm';
import { Errors } from '../../components/forms/form.styled';
import { PrimaryButton } from '../../components/buttons/buttons';
import VisibilityButton from '../../components/forms/components/visibilityButton/VisibilityButton';

const Login = ({ dispatch }) => {
	const navigate = useNavigate();
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const SignInSchema = Yup.object().shape({
		email: Yup.string()
			.required('Email obrigatório')
			.email('Formato de email inválido')
			.matches(
				/^[A-Za-z0-9.%+-]+@dbccompany\.com\.br$/gm,
				'Formato inválido. Ex: nome@dbccompany.com.br'
			),
		password: Yup.string().required('Por favor digite a sua senha!'),
	});

	return (
		<PopUpForm
			height='400px'
			externalLink={{ description: 'Não possuo cadastro', path: '/new-user' }}
		>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={SignInSchema}
				onSubmit={(values) => {
					handleLogin(values, dispatch, navigate);
				}}
			>
				{({ errors, touched }) => (
					<Form id='form-de-login'>
						<div>
							<label htmlFor='email' id='label-email-login'>Email</label>
							<Field name='email' id='email-login' />
							{errors.email && touched.email ? (
								<Errors id='erro-no-email-login'>{errors.email}</Errors>
							) : null}
						</div>

						<div>
							<label htmlFor='password' id='label-password-login'>Senha </label>
							<div style={{ marginBottom: 0 }}>
								<Field
									name='password'
									id='password-login'
									type={isPasswordVisible ? 'text' : 'password'}
									placeholder='password'
								/>

								<VisibilityButton
									setIsPasswordVisible={setIsPasswordVisible}
									isPasswordVisible={isPasswordVisible}
								/>
							</div>
							{errors.password && touched.password ? (
								<Errors id='erro-no-password-login'>{errors.password}</Errors>
							) : null}
						</div>

						<PrimaryButton text='entrar' id='login-button' type='submit' />
					</Form>
				)}
			</Formik>
		</PopUpForm>
	);
};

const mapStateToProps = (state) => ({
	auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Login);
