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
			email: data.email,
			imagemPerfilB64: data.imagemPerfilB64
		}

		dispatch(user);
	}
}

export const updateUserInfo = async(values, userData, dispatch) => {
	
	const token = localStorage.getItem('token');
	const data = {}

	if(token){
		
		Object.keys(values).forEach(
			key => {
				if(values[key] !== userData[key]){
					data[key] = values[key]
				}
			}
		)
		
		try {
			api.defaults.headers.common['Authorization'] = token;
			await api.put('/usuario/logged-user/nome-email-foto', data);
			alert("Cadastro atualizado com sucesso!");

			getLoggedUser(dispatch);

		} catch (error) {
			console.log(`Erro -> ${error}`);
		}

	}

}
