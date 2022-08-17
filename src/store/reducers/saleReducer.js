const INITIAL_STATE = {
	sale: {
		name: '',
		status: 'EM_ANALISE',
		descricao: '',
		items: [],
	},
};

function authReducer(state = INITIAL_STATE, action) {
	if (action.type === 'NEW_SALE') {
		return {
			sale: {
				...action.sale,
			},
		};
	}

	return state;
}

export default authReducer;
