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
			type: 'SET_TOKEN_LOGIN',
			token: data,
		};
		dispatch(logado);
		getRole(dispatch);
		//falta logica de redirecionamento de paginas de acordo com o tipo de usuario
		navigate('/');
	} catch (error) {
		console.log('Senha ou login inválido');

		toast.error('Senha ou login inválidos', {
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
}

export async function getRole(dispatch) {
	try {
		const { data } = await api.get('/usuario/get-logged');

		const logado = {
			type: 'SET_ROLE',
			cargos: data.cargos,
		};
		dispatch(logado);
	} catch (error) {
		console.log('erro', error);
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

export async function isAuth(dispatch) {
	const token = localStorage.getItem('token');

	if (token) {
		api.defaults.headers.common['Authorization'] = token;

		try {
			const { data } = await api.get('/usuario/get-logged');

			const logado = {
				type: 'SET_LOGIN',
				token: token,
				cargos: data.cargos,
			};
			dispatch(logado);
		} catch (error) {
			console.log('erro', error);
		}
	} else {
		const logout = {
			type: 'SET_LOGOUT',
		};

		dispatch(logout);
	}
}
