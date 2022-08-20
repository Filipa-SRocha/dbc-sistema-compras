const INITIAL_STATE = {
	purchasesList: [],
	purchaseToShow: {},
	isLoading: true,
};

function managerReducer(state = INITIAL_STATE, action) {
	if (action.type === 'GET_MANAGER_PURCHASES') {
		return {
			...state,
			purchasesList: action.list,
			isLoading: false,
		};
	}

	if (action.type === 'SET_MANAGER_LOADING') {
		console.log(action.status);
		return {
			...state,

			isLoading: action.status,
		};
	}
	return state;
}

export default managerReducer;
