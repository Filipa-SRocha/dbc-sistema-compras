const INITIAL_STATE = {
	purchasesList: [],
	purchaseToEdit: {},
	purchaseToShow: {},
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
			isLoading: false,
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

	if (action.type === 'SET_SHOW_PURCHASE') {
		return {
			...state,
			loading: false,
			isEditMode: false,
			purchaseToShow: action.purchase,
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

	if (action.type === 'SET_LOADING') {
		return {
			...state,

			loading: action.status,
		};
	}
	return state;
}

export default purchaseReducer;
