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
