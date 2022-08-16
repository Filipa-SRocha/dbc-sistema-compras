const INITIAL_STATE = {
  user: {
		idUser: '',
		nome: '',
		email: ''
	}
}

function userReducer(state = INITIAL_STATE, action){
  if(action.type === 'SET_LOGGED_USER'){
		return {
			user: {
				idUser: action.idUser,
				nome: action.nome,
				email: action.email
			}
		}
	}
  return state;
}

export default userReducer;