import { api } from '../../api';

export async function getBuyerPurchaseList(dispatch) {
	try {
		changeLoadingStatus(true, dispatch);

		const { data } = await api.get('/comprador/listar');

		const newList = {
			type: 'GET_BUYER_PURCHASES',
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

export const changeLoadingStatus = (status, dispatch) => {
	const loading = {
		type: 'SET_BUYER_LOADING',
		status: status,
	};

	dispatch(loading);
};
