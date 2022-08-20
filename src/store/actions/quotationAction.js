import { api } from '../../api';

export async function getAllQuotations(dispatch) {
	try {
		changeLoadingStatus(true, dispatch);
		const { data } = await api.get('/comprador/listar');

		console.log('todas cotações', data);

		const newList = {
			type: 'GET_ALL_QUOTATIONS',
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

export async function handleNewQuotation(idCompra, values) {
	try {
		console.log('values', values);
		await api.post(`/comprador/cotar?idCompra=${idCompra}`, values);
	} catch (error) {
		console.log('Não foi possível adicionar cotação. Erro no servidor', error);
	}
}

export const changeLoadingStatus = (status, dispatch) => {
	const loading = {
		type: 'SET_Q_LOADING',
		status: status,
	};

	dispatch(loading);
};
