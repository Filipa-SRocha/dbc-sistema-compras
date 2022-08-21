const INITIAL_STATE = {
  user: {
		idUser: '',
		nome: '',
		email: '',
		cargos: [],
		imagemPerfilB64: '',
		isAdmin: false
	},
	
}

function userReducer(state = INITIAL_STATE, action){
  if(action.type === 'SET_LOGGED_USER'){
		return {
			user: {
				idUser: action.idUser,
				nome: action.nome,
				email: action.email,
				cargos: action.cargos,
				imagemPerfilB64: action.imagemPerfilB64,
				isAdmin: action.isAdmin
			}
		}
	}
  return state;
}

export default userReducer;