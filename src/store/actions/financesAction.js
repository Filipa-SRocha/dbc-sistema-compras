import { api } from '../../api';

export async function getPurchases(dispatch) {
	try {
		changeLoadingStatus(true, dispatch);

		const { data } = await api.get('/financeiro/listar-compras-com-cotacoes');
		const newList = {
			type: 'GET_FINANCES_PURCHASES',
			list: data,
		};

		//convert dataCompra to date Object
		// data.forEach((purchase) => {
		// 	purchase.dataCompra = convertToDateObject(purchase.dataCompra);
		// });

		//Descending Data Filter
		// data.sort(
		// 	(purchaseA, purchaseB) =>
		// 		Number(purchaseB.dataCompra) - Number(purchaseA.dataCompra)
		// );

		dispatch(newList);
	} catch (error) {
		changeLoadingStatus(false, dispatch);
		console.log(
			'Não foi possível atualizar a lista de compras. Erro no servidor',
			error
		);
	}
}

export async function manageFinancesApproval(idCompra, value, dispatch) {
	try {
		await api.put(
			`/financeiro/aprovar-reprovar-compra/${idCompra}?aprovacao=${value}`
		);
		getPurchases(dispatch);
	} catch (error) {
		console.log('Erro na aprovação de cotação', error);
	}
}

export const changeLoadingStatus = (status, dispatch) => {
	const loading = {
		type: 'SET_FINANCES_LOADING',
		status: status,
	};

	dispatch(loading);
};
