import { api } from '../../api';
import { toast } from 'react-toastify';
import nProgress from 'nprogress';
import { getRole } from './authActions';

export const handleSignUp = async (values, dispatch, navigate) => {
	const newUser = {
		nome: values.nome,
		email: values.email,
		senha: values.senha,
		foto: values.foto,
	};

	try {
		nProgress.start();
		const { data } = await api.post('/usuario/create-user', newUser);
		localStorage.setItem('token', data.token);
		api.defaults.headers.common['Authorization'] = data.token;

		dispatch({ type: 'SET_SIGNUP_LOGIN', token: data.token });

		toast.success('Cadastro realizado com sucesso!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		navigate('/');
	} catch (error) {
		console.log(`Erro -> ${error}`);
		toast.error('Ocorreu um erro ao tentar criar a conta', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	} finally {
		nProgress.done();
	}
};
