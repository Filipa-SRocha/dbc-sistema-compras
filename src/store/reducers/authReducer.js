const INITIAL_STATE = {
	auth: {
		token: '',
		isLogged: false,
		isLoading: true,
		cargos: [],
	},
};

function authReducer(state = INITIAL_STATE, action) {
	if (action.type === 'SET_LOGIN') {
		return {
			auth: {
				token: action.token,
				isLogged: true,
				isLoading: false,
				cargos: action.cargos,
			},
		};
	}

	if (action.type === 'SET_LOGIN') {
		return {
			auth: {
				token: action.token,
				isLogged: true,
				isLoading: false,
			},
		};
	}

	if (action.type === 'SET_LOGOUT') {
		return {
			auth: {
				token: '',
				isLogged: false,
				isLoading: false,
			},
		};
	}

	return state;
}

export default authReducer;
