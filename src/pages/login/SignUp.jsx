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

const SignUp = () => {
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
		tipo: Yup.string().required('Por favor indique o tipo de usuário'),
		senha: Yup.string()
			.required('Por favor digite uma senha forte')
			.password()
			.minLowercase(1, 'Senha precisa conter pelo menos uma letra minuscula')
			.minUppercase(1, 'Senha precisa conter pelo menos uma letra maiuscula')
			.minNumbers(1, 'Senha precisa conter pelo menos um número')
			.minSymbols(1, 'Senha precisa conter pelo menos um caractere especial')
			.min(8, 'Senha precisa conter pelo menos oito caracteres'),
		confirmacaoSenha: Yup.string()
			.required('Por favor, confirme a sua senha')
			.oneOf([Yup.ref('senha'), null], 'Senhas devem ser iguais'),
	});

	const handleSignup = (values) => {
		//logica de cadastro
	};

	const getFiles = (files) => {
		setTesteImagem({ ...files });
		console.log(files);
	};

	return (
		<PopUpForm
			height={testIsAdministrator ? '630px' : '600px'}
			externalLink={{ description: 'Já tem uma conta? Entre', path: '/login' }}
		>
			<Formik
				initialValues={{
					nome: '',
					tipo: 'Colaborador',
					email: '',
					senha: '',
					confirmacaoSenha: '',
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					handleSignup(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div>
							<label htmlFor='nome'>Nome* </label>
							<Field name='nome' placeholder='Nome completo' />
							{errors.nome && touched.nome ? (
								<Errors>{errors.nome}</Errors>
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
							<label htmlFor='email'>E-mail* </label>
							<Field
								name='email'
								type='email'
								placeholder='email@dbccompany.com'
							/>
							{errors.email && touched.email ? (
								<Errors>{errors.email}</Errors>
							) : null}
						</div>

						<div>
							<div className='StrongPassword'>
								<label htmlFor='senha'>
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
									<Field name='senha' type='password' placeholder='Senha' />
								</PasswordStrengthMeter>
							</div>
						</div>

						<div>
							<label htmlFor='confirmacaoSenha'>Confirme a sua senha* </label>
							<Field name='confirmacaoSenha' type='password' />
							{errors.confirmacaoSenha && touched.confirmacaoSenha ? (
								<Errors>{errors.confirmacaoSenha}</Errors>
							) : null}
						</div>

						<div className='signup-profile-img'>
							<label htmlFor="profilepicture">Imagem de perfil</label>
							<FileBase64 multiple={false} onDone={getFiles} className='fileBase64' />
							{testeImagem ? <img src={testeImagem.base64} /> : null}
						</div>

						<PrimaryButton text='Cadastrar' type='submit' />
					</Form>
				)}
			</Formik>
		</PopUpForm>
	);
};
export default SignUp;
