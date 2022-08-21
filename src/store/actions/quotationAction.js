import { api } from '../../api';

// export async function getAllQuotations(dispatch) {
// 	try {
// 		changeLoadingStatus(true, dispatch);
// 		const { data } = await api.get('/comprador/listar');

// 		console.log('todas cotações', data);

// 		const newList = {
// 			type: 'GET_ALL_QUOTATIONS',
// 			list: data,
// 		};

// 		dispatch(newList);
// 	} catch (error) {
// 		changeLoadingStatus(false, dispatch);
// 		console.log(
// 			'Não foi possível atualizar a lista de cotações. Erro no servidor',
// 			error
// 		);
// 	}
// }

export async function getPurchaseQuotations(idCompra, dispatch) {
	try {
		changeLoadingStatus(true, dispatch);
		const { data } = await api.get(`/comprador/listar?idCompra=${idCompra}`);

		const newList = {
			type: 'GET_PURCHASE_QUOTATIONS',
			list: data,
		};

		dispatch(newList);
	} catch (error) {
		changeLoadingStatus(false, dispatch);
		console.log(
			'Não foi possível atualizar a lista de cotações. Erro no servidor',
			error
		);
	}
}

export async function getNumberPurchaseQuotations(idCompra) {
	try {
		const { data } = await api.get(`/comprador/listar?idCompra=${idCompra}`);
		console.log({ data });
		return data.length;
	} catch (error) {
		console.log(
			'Não foi possível obter lista de cotações. Erro no servidor',
			error
		);
	}
}

export async function handleNewQuotation(idCompra, values, navigate) {
	try {
		await api.post(`/comprador/cotar?idCompra=${idCompra}`, values);
		navigate(`/details-page/${idCompra}`);
	} catch (error) {
		console.log('Não foi possível adicionar cotação. Erro no servidor', error);
	}
}

export async function changeQuotationStatus(idCompra) {
	try {
		await api.put(`/comprador/concluir-cotacao?idCompra=${idCompra}`);
	} catch (error) {
		console.log(
			'Não foi possivel enviar as cotações para aprovação do gestor',
			error
		);
	}
}

export const changeLoadingStatus = (status, dispatch) => {
	const loading = {
		type: 'SET_Q_LOADING',
		status: status,
	};

	dispatch(loading);
};
