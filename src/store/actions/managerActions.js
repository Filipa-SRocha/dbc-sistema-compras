import { api } from '../../api';

export async function getPurchasesWithQuotations(dispatch) {
	try {
		changeLoadingStatus(true, dispatch);

		const { data } = await api.get('/gestor/listar');
		console.log('Dados gestor', data);

		const newList = {
			type: 'GET_MANAGER_PURCHASES',
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

export async function manageQuotation(idCotacao, value, dispatch) {
	try {
		await api.post(
			`/gestor/aprovarReprovar/${idCotacao}/status?status=${value}`
		);
		getPurchasesWithQuotations(dispatch);
	} catch (error) {
		console.log('Erro na aprovação de cotação', error);
	}
}

export const changeLoadingStatus = (status, dispatch) => {
	const loading = {
		type: 'SET_MANAGER_LOADING',
		status: status,
	};

	dispatch(loading);
};
