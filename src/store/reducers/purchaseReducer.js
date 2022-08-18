const INITIAL_STATE = {
	sale: {
		name: '',
		status: 'EM_ANALISE',
		descricao: '',
		items: [],
	},
};

function purchaseReducer(state = INITIAL_STATE, action) {
	// if (action.type === 'SET_LOGIN') {
	// 	return {
	// 		auth: {
	// 			token: action.token,
	// 			isLogged: true,
	// 			isLoading: false,
	// 		},
	// 	};
	// }

	return state;
}

export default purchaseReducer;
