import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import FileBase64 from 'react-file-base64';
import { AiOutlineLock } from 'react-icons/ai';
import { AiOutlineUnlock } from 'react-icons/ai';
import { useState } from 'react';

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
		<div>
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
							{errors.nome && touched.nome ? <div>{errors.nome}</div> : null}
						</div>

						<div>
							<label htmlFor='email'>E-mail* </label>
							<Field
								name='email'
								type='email'
								placeholder='email@dbccompany.com'
							/>
							{errors.email && touched.email ? <div>{errors.email}</div> : null}
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
							{errors.senha && touched.senha ? <div>{errors.senha}</div> : null}
						</div>

						<div>
							<label htmlFor='confirmacaoSenha'>Confirme a sua senha* </label>
							<Field name='confirmacaoSenha' type='password' />
							{errors.confirmacaoSenha && touched.confirmacaoSenha ? (
								<div>{errors.confirmacaoSenha}</div>
							) : null}
						</div>

						<FileBase64 multiple={false} onDone={getFiles} />
						{testeImagem ? <img src={testeImagem.base64} /> : <p>sem imagem</p>}

						<button type='submit'>Cadastrar</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
export default SignUp;
