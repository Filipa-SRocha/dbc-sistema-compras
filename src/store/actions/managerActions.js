import { api } from '../../api';

export async function getPurchasesWithQuotations(dispatch) {
	try {
		changeLoadingStatus(true, dispatch);

		const { data } = await api.get('/gestor/listar');
		console.log('Dados gestor', data);

		//filtra para ter array com info de contas somente
		const justPurchaseInfo = data.map((fullPurchase) => fullPurchase.compraDTO);
		let ids = new Set(justPurchaseInfo.map((purchase) => purchase.idCompra));
		ids = [...ids];
		const uniquePurchaseInfo = ids.map((id) =>
			justPurchaseInfo.find((purchase) => purchase.idCompra === id)
		);
		console.log('unicas', uniquePurchaseInfo);

		const newList = {
			type: 'GET_MANAGER_PURCHASES',
			list: data,
			purchasesIds: ids,
			onlyPurchaseInfo: uniquePurchaseInfo,
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

export async function manageQuotation(idCotacao, value, dispatch) {
	try {
		await api.post(
			`/gestor/aprovarReprovar/${idCotacao}/status?status=${value}`
		);
	} catch (error) {
		console.log('Erro na aprovação de cotação', error);
	}
}

// export async function getQuotationId(idCompra) {
// 	try {
// 		const { data } = await api.get(`gestor/listar?idCompra=${idCompra}`);
// 		console.log(data);
// 		return data[0].idCotacao;
// 	} catch (error) {
// 		console.log('Erro. Não foi possível encotrar a cotação', error);
// 	}
// }

export const changeLoadingStatus = (status, dispatch) => {
	const loading = {
		type: 'SET_MANAGER_LOADING',
		status: status,
	};

	dispatch(loading);
};
