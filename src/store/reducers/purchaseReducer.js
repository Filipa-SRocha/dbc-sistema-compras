const INITIAL_STATE = {
	purchasesList: [],
	purchaseToEdit: {},
	isLoading: true,
	isEditMode: false,
};

// dataCompra: "2022-08-17"
// descricao: "Compra de teste"
// idCompra: 44
// itens: (2) [{…}, {…}]
// name: "Compra 1"
// status: "aberto"
// valorTotal: null

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
	return state;
}

export default purchaseReducer;
