import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import FileBase64 from 'react-file-base64';
import { AiOutlineLock } from 'react-icons/ai';
import { AiOutlineUnlock } from 'react-icons/ai';
import { useState } from 'react';
import PopUpForm from '../../components/forms/PopUpForm';
import { Errors } from '../../components/forms/form.styled';
import { PrimaryButton } from '../../components/buttons/buttons';
import PasswordStrengthMeter from '../../components/forms/components/passwordStrengthMeter/PasswordStrengthMeter';
import { handleSignUp } from '../../store/actions/signUpAction';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUp = ({handleSignUp, dispatch}) => {
	
	const navigate = useNavigate();
	
	YupPassword(Yup);
	const testIsAdministrator = false;
	const [testeImagem, setTesteImagem] = useState(null);

	const SignupSchema = Yup.object().shape({
		nome: Yup.string()
			.min(4, 'Nome demasiado curto!')
			.max(60, 'Login demasiado longo!')
			.required('Nome obrigatório'),
		email: Yup.string()
			.email('Formato de e-mail inválido')
			.required('Email obrigatório'),
		// tipo: Yup.string().required('Por favor indique o tipo de usuário'),
		senha: Yup.string()
			.required('Por favor digite uma senha forte')
			.password()
			.minLowercase(1, 'Senha precisa conter pelo menos uma letra minuscula')
			.minUppercase(1, 'Senha precisa conter pelo menos uma letra maiuscula')
			.minNumbers(1, 'Senha precisa conter pelo menos um número')
			.minSymbols(1, 'Senha precisa conter pelo menos um caractere especial')
			.min(8, 'Senha precisa conter pelo menos oito caracteres'),
		// confirmacaoSenha: Yup.string()
		// 	.required('Por favor, confirme a sua senha')
		// 	.oneOf([Yup.ref('senha'), null], 'Senhas devem ser iguais'),
	});

	const getFiles = (files, setFieldValue) => {
		setTesteImagem({ ...files });
		const imgCode = files.base64.split(',');
		const imgBase64 = imgCode[1];
		setFieldValue("foto", imgBase64);
		// console.log(imgBase64);
	};

	return (
		<PopUpForm
			height={testIsAdministrator ? '630px' : '600px'}
			externalLink={{ description: 'Já tem uma conta? Entre', path: '/login' }}
		>
			<Formik
				initialValues={{
					nome: '',
					// ! tipo: 'Colaborador', -> colocar depois
					email: '',
					senha: '',
					foto: ''
					// confirmacaoSenha: '', // -> colocar depois
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					console.log(values)
					handleSignUp(values, dispatch, navigate);
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

						{testIsAdministrator ? (
							<div>
								<label htmlFor='tipo'>Tipo de Usuário* </label>
								<Field
									id='tipo'
									name='tipo'
									as='select'
									disabled={!testIsAdministrator}
								>
									<option value='' hidden>
										Escolha uma opção
									</option>
									<option value='Administrador'>Administrador</option>
									<option value='Colaborador'>Colaborador</option>
									<option value='Comprador'>Comprador</option>
									<option value='Gestor'>Gestor</option>
									<option value='Financeiro'>Financeiro</option>
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

						{/* <div>
							<label htmlFor='confirmacaoSenha'>Confirme a sua senha* </label>
							<Field name='confirmacaoSenha' type='password' />
							{errors.confirmacaoSenha && touched.confirmacaoSenha ? (
								<Errors>{errors.confirmacaoSenha}</Errors>
							) : null}
						</div> */}

						<div className='signup-profile-img'>
							<label htmlFor='foto' id='label-foto-perfil'>Imagem de perfil</label>
							<FileBase64
								name='foto'
								id='foto-perfil-signup'
								multiple={false}
								onDone={e => getFiles(e, setFieldValue)}
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

const mapDispatchToProps = () => ({
	handleSignUp: (values, dispatch, navigate) => handleSignUp(values, dispatch, navigate)
});

export default connect(mapDispatchToProps)(SignUp);
