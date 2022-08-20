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
			isLoading: false,
			isEditMode: false,
		};
	}

	if (action.type === 'SET_SHOW_PURCHASE') {
		console.log('reducer');
		return {
			...state,
			isEditMode: false,
			purchaseToShow: action.purchase,
			isLoading: false,
		};
	}

	if (action.type === 'DISABLE_EDIT_MODE') {
		return {
			...state,
			purchaseToEdit: {},
			isLoading: false,
			isEditMode: false,
		};
	}

	if (action.type === 'SET_LOADING') {
		console.log(action.status);
		return {
			...state,

			isLoading: action.status,
		};
	}
	return state;
}

export default purchaseReducer;
