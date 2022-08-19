import { api } from '../../api';
import { toast } from 'react-toastify';
import nProgress from 'nprogress';

export async function handleLogin(values, dispatch, navigate) {
	try {
		nProgress.start();
		const { data } = await api.post('/auth', values);
		localStorage.setItem('token', data);

		api.defaults.headers.common['Authorization'] = data;
		const logado = {
			type: 'SET_LOGIN',
			token: data,
		};
		dispatch(logado);

		//falta logica de redirecionamento de paginas de acordo com o tipo de usuario
		navigate('/');
	} catch (error) {
		console.log('Senha ou login inválido');
		
		toast.error('Senha ou login inválidos', {
			position: "top-center",
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
}

export function handleLogout(dispatch) {
	try {
		localStorage.removeItem('token');
		api.defaults.headers.common['Authorization'] = undefined;
		const logout = {
			type: 'SET_LOGOUT',
		};

		dispatch(logout);
		window.location.href = '/login';
	} catch (error) {
		console.log(error);
	}
}

export function isAuth(dispatch) {
	const token = localStorage.getItem('token');

	if (token) {
		api.defaults.headers.common['Authorization'] = token;
		const logado = {
			type: 'SET_LOGIN',
			token: token,
		};
		dispatch(logado);
	} else {
		const logout = {
			type: 'SET_LOGOUT',
		};

		dispatch(logout);
	}
}