const INITIAL_STATE = {
	purchasesList: [],
	isLoading: true,
};

function buyerReducer(state = INITIAL_STATE, action) {
	if (action.type === 'GET_BUYER_PURCHASES') {
		return {
			...state,
			purchasesList: action.list,
			isLoading: false,
		};
	}

	if (action.type === 'SET_BUYER_LOADING') {
		return {
			...state,

			isLoading: action.status,
		};
	}
	return state;
}

export default buyerReducer;
