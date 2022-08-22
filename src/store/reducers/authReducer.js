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

	if (action.type === 'SET_TOKEN_LOGIN') {
		return {
			auth: {
				token: action.token,
				isLogged: true,
				isLoading: true,
			},
		};
	}

	if (action.type === 'SET_ROLE') {
		return {
			auth: {
				...state,
				isLogged: true,
				isLoading: false,
				cargos: action.cargos,
			},
		};
	}

	if (action.type === 'SET_SIGNUP_LOGIN') {
		return {
			auth: {
				token: action.token,
				isLogged: true,
				isLoading: false,
				cargos: [{ name: 'ROLE_COLABORADOR' }],
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
