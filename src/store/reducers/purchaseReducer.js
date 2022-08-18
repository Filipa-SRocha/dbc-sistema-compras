const INITIAL_STATE = {
	purchasesList: [],
	isLoading: true,
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

	return state;
}

export default purchaseReducer;
