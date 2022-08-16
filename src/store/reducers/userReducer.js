const INITIAL_STATE = {
  user: {
		idUser: '',
		nome: '',
		email: '',
		imagemPerfilB64: ''
	}
}

function userReducer(state = INITIAL_STATE, action){
  if(action.type === 'SET_LOGGED_USER'){
		return {
			user: {
				idUser: action.idUser,
				nome: action.nome,
				email: action.email,
				imagemPerfilB64: action.imagemPerfilB64
			}
		}
	}
  return state;
}

export default userReducer;