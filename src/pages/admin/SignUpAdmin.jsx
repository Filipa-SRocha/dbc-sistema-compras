import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import FileBase64 from 'react-file-base64';

import { AiOutlineLock } from 'react-icons/ai';
import { AiOutlineUnlock } from 'react-icons/ai';
import PopUpForm from '../../components/forms/PopUpForm';
import { Errors } from '../../components/forms/form.styled';
import { PrimaryButton } from '../../components/buttons/buttons';
import PasswordStrengthMeter from '../../components/forms/components/passwordStrengthMeter/PasswordStrengthMeter';

import { handleSignUp } from '../../store/actions/signUpAction';
import { createNewUser } from '../../store/actions/adminActions'
import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = ({ user }) => {

  const navigate = useNavigate();
  
	YupPassword(Yup);
  
	const [testeImagem, setTesteImagem] = useState(null);
  if(!user.isAdmin) {
    return <Navigate to='/' />
  }
  
	const SignupSchema = Yup.object().shape({
		nome: Yup.string()
			.min(4, 'Nome demasiado curto!')
			.max(60, 'Login demasiado longo!')
			.required('Nome obrigatório'),
		email: Yup.string()

			.email('Formato de e-mail inválido')
			.required('Email obrigatório')
			.matches(
				/^[A-Za-z0-9.%+-]+@dbccompany\.com\.br$/gm,
				'Formato inválido. Ex: nome@dbccompany.com.br'
			),
		tipo: Yup.string('Por favor indique o tipo de usuário'),
		senha: Yup.string()
			.required('Por favor digite uma senha forte')
			.password()
			.minLowercase(1, 'Senha precisa conter pelo menos uma letra minuscula')
			.minUppercase(1, 'Senha precisa conter pelo menos uma letra maiuscula')
			.minNumbers(1, 'Senha precisa conter pelo menos um número')
			.minSymbols(1, 'Senha precisa conter pelo menos um caractere especial')
			.min(8, 'Senha precisa conter pelo menos oito caracteres')
			.max(16, 'Senha demasiado longa. Máx: 16 caracteres'),
		confirmacaoSenha: Yup.string()
		.required('Por favor, confirme a sua senha')
		.oneOf([Yup.ref('senha'), null], 'Senhas devem ser iguais'),
	});

	const getFiles = (files, setFieldValue) => {
		setTesteImagem({ ...files });
		const imgCode = files.base64.split(',');
		const imgBase64 = imgCode[1];
		setFieldValue('foto', imgBase64);
		// console.log(imgBase64);
	};

	return (
		<PopUpForm
			height={user.isAdmin ? '630px' : '600px'}
			externalLink={{ description: 'Já tem uma conta? Entre', path: '/login' }}
		>
			<Formik
				initialValues={{
					nome: '',
					tipo: '',
					email: '',
					senha: '',
					foto: '',
					confirmacaoSenha: ''
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					console.log(values);
					createNewUser(values, navigate);
				}}
			>
				{({ errors, touched, setFieldValue }) => (
					<Form id='form-de-signup'>
						<div>
							<label htmlFor='nome' id='label-nome'>Nome* </label>
							<Field name='nome' id='nome-signup' placeholder='Nome completo' />
							{errors.nome && touched.nome ? (
								<Errors id='erro-no-nome'>{errors.nome}</Errors>
							) : null}
						</div>

						{user.isAdmin ? (
							<div>
								<label htmlFor='tipo'>Tipo de Usuário* </label>
								<Field
									id='tipo'
									name='tipo'
									as='select'
								>
									<option value='' hidden>
										Escolha uma opção
									</option>
									<option value='ADMINISTRADOR'>Administrador</option>
									<option value='COLABORADOR'>Colaborador</option>
									<option value='COMPRADOR'>Comprador</option>
									<option value='GESTOR'>Gestor</option>
									<option value='FINANCEIRO'>Financeiro</option>
								</Field>
								{errors.tipo && touched.tipo ? (
									<Errors>{errors.tipo}</Errors>
								) : null}
							</div>
						) : null}

						<div>
							<label htmlFor='email' id='label-email-signup'>E-mail* </label>
							<Field
								name='email'
								id='email-signup'
								type='email'
								placeholder='email@dbccompany.com.br'
							/>
							{errors.email && touched.email ? (
								<Errors id='erro-no-email-signup'>{errors.email}</Errors>
							) : null}
						</div>

						<div className='StrongPassword'>
							<label htmlFor='senha' id='label-senha-signup'>
								{errors.senha && touched.senha ? (
									<AiOutlineUnlock style={{ color: 'red' }} />
								) : touched.senha ? (
									<AiOutlineLock style={{ color: 'green' }} />
								) : (
									<AiOutlineUnlock style={{ color: '#gray' }} />
								)}
								Senha*
							</label>
							<PasswordStrengthMeter errors={errors.senha}>
								<Field name='senha' id='senha-signup' type='password' placeholder='Senha' />
							</PasswordStrengthMeter>
						</div>

						<div>
							<label htmlFor='confirmacaoSenha'>Confirme a sua senha* </label>
							<Field name='confirmacaoSenha' type='password' />
							{errors.confirmacaoSenha && touched.confirmacaoSenha ? (
								<Errors>{errors.confirmacaoSenha}</Errors>
							) : null}
						</div>

						<div className='signup-profile-img'>
							<label htmlFor='foto' id='label-foto-perfil'>Imagem de perfil</label>
							<FileBase64
								name='foto'
								id='foto-perfil-signup'
								multiple={false}
								onDone={(e) => getFiles(e, setFieldValue)}
								className='fileBase64'
							/>
							{testeImagem ? <img src={testeImagem.base64} /> : null}
						</div>

						<PrimaryButton text='Cadastrar' id='signup-button' type='submit' />

					</Form>
				)}
			</Formik>
		</PopUpForm>
	);
};

const mapStateToProps = (state) => ({
	user: state.userReducer.user,
})

export default connect(mapStateToProps)(SignUp);
