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
			.email('Formato de email inválido'),
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
					<Form>
						<div>
							<label htmlFor='email'>Email</label>
							<Field name='email' />
							{errors.email && touched.email ? (
								<Errors>{errors.email}</Errors>
							) : null}
						</div>

						<div>
							<label htmlFor='password'>Senha </label>
							<div style={{ marginBottom: 0 }}>
								<Field
									name='password'
									type={isPasswordVisible ? 'text' : 'password'}
									placeholder='password'
								/>

								<VisibilityButton
									setIsPasswordVisible={setIsPasswordVisible}
									isPasswordVisible={isPasswordVisible}
								/>
							</div>
							{errors.password && touched.password ? (
								<Errors>{errors.password}</Errors>
							) : null}
						</div>

						<PrimaryButton text='entrar' type='submit' />
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
