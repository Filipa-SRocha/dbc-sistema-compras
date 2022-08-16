import { api } from '../../api';

export async function handleLogin(values, dispatch, navigate) {
	try {
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