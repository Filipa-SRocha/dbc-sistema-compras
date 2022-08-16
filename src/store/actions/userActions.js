import { api } from '../../api';

export const getLoggedUser = async (dispatch) => {
	const token = localStorage.getItem('token');

	if(token) {
		api.defaults.headers.common['Authorization'] = token;
		const { data } = await api.get('/usuario/get-logged');

		const user = {
			type: 'SET_LOGGED_USER',
			idUser: data.idUser,
			nome: data.nome,
			email: data.email
		}

		dispatch(user);
	}
}
