const INITIAL_STATE = {
	purchasesList: [],
	isLoading: true,
};

function financesReducer(state = INITIAL_STATE, action) {
	if (action.type === 'GET_FINANCES_PURCHASES') {
		return {
			...state,
			purchasesList: action.list,
			isLoading: false,
		};
	}

	if (action.type === 'SET_FINANCES_LOADING') {
		console.log(action.status);
		return {
			...state,

			isLoading: action.status,
		};
	}
	return state;
}

export default financesReducer;
