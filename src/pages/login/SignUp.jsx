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

const SignUp = () => {
	YupPassword(Yup);

	const [testeImagem, setTesteImagem] = useState(null);

	const SignupSchema = Yup.object().shape({
		nome: Yup.string()
			.min(4, 'Nome demasiado curto!')
			.max(60, 'Login demasiado longo!')
			.required('Nome obrigatório'),
		email: Yup.string()
			.email('Formato de e-mail inválido')
			.required('Email obrigatório'),
		senha: Yup.string()
			.required('Por favor digite uma senha forte')
			.password()
			.min(8, 'Senha precisa conter pelo menos oito caracteres')
			.minLowercase(1, 'Senha precisa conter pelo menos uma letra minuscula')
			.minUppercase(1, 'Senha precisa conter pelo menos uma letra maiuscula')
			.minNumbers(1, 'Senha precisa conter pelo menos um número')
			.minSymbols(1, 'Senha precisa conter pelo menos um caractere especial'),
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
			height='560px'
			title='Nova Conta'
			externalLink={{ description: 'Já tem uma conta? Entre', path: '/login' }}
		>
			<Formik
				initialValues={{
					nome: '',
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
								<label htmlFor='senha'>Senha </label>

								{errors.senha && touched.senha ? (
									<AiOutlineUnlock style={{ color: 'red' }} />
								) : touched.senha ? (
									<AiOutlineLock style={{ color: 'green' }} />
								) : (
									<></>
								)}
							</div>

							<Field name='senha' type='password' placeholder='Senha' />
							{errors.senha && touched.senha ? (
								<Errors>{errors.senha}</Errors>
							) : null}
						</div>

						<div>
							<label htmlFor='confirmacaoSenha'>Confirme a sua senha* </label>
							<Field name='confirmacaoSenha' type='password' />
							{errors.confirmacaoSenha && touched.confirmacaoSenha ? (
								<Errors>{errors.confirmacaoSenha}</Errors>
							) : null}
						</div>

						<FileBase64 multiple={false} onDone={getFiles} />
						{testeImagem ? <img src={testeImagem.base64} /> : <p>sem imagem</p>}

						<PrimaryButton text='Cadastrar' type='submit' />
					</Form>
				)}
			</Formik>
		</PopUpForm>
	);
};
export default SignUp;
