const INITIAL_STATE = {
	quotationsList: [],
	isLoading: true,
};

function quotationReducer(state = INITIAL_STATE, action) {
	if (action.type === 'GET_PURCHASE_QUOTATIONS') {
		return {
			...state,
			quotationsList: action.list,
			isLoading: false,
		};
	}

	if (action.type === 'SET_Q_LOADING') {
		return {
			...state,

			isLoading: action.status,
		};
	}
	return state;
}

export default quotationReducer;
