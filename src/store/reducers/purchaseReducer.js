const INITIAL_STATE = {
	purchasesList: [],
	purchaseToEdit: {},
	isLoading: true,
	isEditMode: false,
};

function purchaseReducer(state = INITIAL_STATE, action) {
	if (action.type === 'GET_PURCHASES') {
		return {
			...state,
			purchasesList: action.list,
			isLoading: false,
		};
	}

	if (action.type === 'SET_PURCHASE_TO_EDIT') {
		return {
			...state,
			purchaseToEdit: action.purchase,
			loading: true,
			isEditMode: true,
		};
	}

	if (action.type === 'FINALIZE_EDIT') {
		return {
			...state,
			purchaseToEdit: {},
			loading: false,
			isEditMode: false,
		};
	}

	if (action.type === 'DISABLE_EDIT_MODE') {
		return {
			...state,
			purchaseToEdit: {},
			loading: false,
			isEditMode: false,
		};
	}
	return state;
}

export default purchaseReducer;
