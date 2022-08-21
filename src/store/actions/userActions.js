import { api } from '../../api';
import { toast } from 'react-toastify';
import nProgress from 'nprogress';

export const getLoggedUser = async (dispatch) => {
	const token = localStorage.getItem('token');

	if(token) {
		nProgress.start();
		api.defaults.headers.common['Authorization'] = token;
		const { data } = await api.get('/usuario/get-logged');
		
		// console.log(data);

		const isAdmin = data.cargos.some(item => item.name === 'ROLE_ADMINISTRADOR')

		const user = {
			type: 'SET_LOGGED_USER',
			idUser: data.idUser,
			nome: data.nome,
			email: data.email,
			cargos: data.cargos,
			imagemPerfilB64: data.imagemPerfilB64,
			isAdmin,
		}

		dispatch(user);
		nProgress.done();
	}
}

export const updateUserInfo = async(values, dispatch) => {
	
	const token = localStorage.getItem('token');
	// const data = {}

	if(token){

		nProgress.start();
		
		// Object.keys(values).forEach(
		// 	key => {
		// 		if(values[key] !== userData[key]){
		// 			data[key] = values[key]
		// 		}
		// 	}
		// )
		
		try {
			api.defaults.headers.common['Authorization'] = token;
			await api.put('/usuario/logged-user/', values);
			// alert("Cadastro atualizado com sucesso!");

			toast.success('Cadastro atualizado com sucesso!', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});

			getLoggedUser(dispatch);

		} catch (error) {
			console.log(`Erro -> ${error}`);
		} finally {
			nProgress.done();
		}

	}

}

export const updateUserPassword = async (data, navigate) => {
	const token = localStorage.getItem('token');

	if(token) {
		try {
			nProgress.start();
			api.defaults.headers.common['Authorization'] = token;
			await api.put('/usuario/change-password/', data);
			// alert("Senha atualizada com sucesso!");

			toast.success('Senha atualizada com sucesso!', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});

			navigate('/user');

		} catch (error) {
			console.log(`Erro -> ${error}`);

			toast.error('Senha atual errada!', {
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
}
