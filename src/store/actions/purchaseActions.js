import { api } from '../../api';
import { convertToDateObject } from '../../utils/masks';

export async function handleNewPurchase(values, navigate, resetForm) {
	try {
		const newPurchase = {
			name: values.name,
			descricao: values.descricao,
			itens: values.items,
		};

		await api.post('/colaborador/nova-compra', newPurchase);
		navigate('/');
		resetForm();
	} catch (error) {
		console.log('Não foi possível concluir a sua solicitação', error);
	}
}

export async function getAllPurchases(dispatch) {
	try {
		changeLoadingStatus(true, dispatch);
		const { data } = await api.get('/colaborador/compras');

		const newList = {
			type: 'GET_PURCHASES',
			list: data,
		};

		//convert dataCompra to date Object
		data.forEach((purchase) => {
			purchase.dataCompra = convertToDateObject(purchase.dataCompra);
		});

		//Descending Data Filter
		data.sort(
			(purchaseA, purchaseB) =>
				Number(purchaseB.dataCompra) - Number(purchaseA.dataCompra)
		);

		dispatch(newList);
	} catch (error) {
		changeLoadingStatus(false, dispatch);
		console.log(
			'Não foi possível atualizar a lista de solicitações. Erro no servidor',
			error
		);
	}
}

export async function deletePurchase(id, dispatch) {
	try {
		await api.delete(`/colaborador/compra/${id}`);
		getAllPurchases(dispatch);
	} catch (error) {
		console.log(
			'Não foi possível eliminar esta solicitação. Erro no servidor',
			error
		);
	}
}

export async function editPurchase(idCompra, dispatch, navigate) {
	try {
		changeLoadingStatus(true, dispatch);
		const { data } = await api.get(`/colaborador/compras?idCompra=${idCompra}`);

		const edit = {
			type: 'SET_PURCHASE_TO_EDIT',
			purchase: data[0],
		};
		dispatch(edit);
	} catch (error) {
		changeLoadingStatus(false, dispatch);
		console.log('Não foi possível acessar essa solicitação!', error);
		navigate('/');
	}
}

export async function handleEditPurchase(
	values,
	idCompra,
	dispatch,
	navigate,
	resetForm
) {
	try {
		await api.put(`/colaborador/compra/novos-itens/${idCompra}`, values);

		const edit = {
			type: 'FINALIZE_EDIT',
		};

		dispatch(edit);
		navigate('/');
		resetForm();
	} catch (error) {
		console.log('Não foi possível editar esta solicitação!', error);
	}
}

export const disableEditMode = (dispatch) => {
	dispatch({ type: 'DISABLE_EDIT_MODE' });
};

export async function setPurchaseToShow(idCompra, dispatch) {
	try {
		changeLoadingStatus(true, dispatch);
		const { data } = await api.get(`/colaborador/compras?idCompra=${idCompra}`);

		const showPurchase = {
			type: 'SET_SHOW_PURCHASE',
			purchase: data[0],
		};

		dispatch(showPurchase);
	} catch (error) {
		changeLoadingStatus(false, dispatch);
		console.log('Não foi possível aceder a esta solicitação. Erro no servidor');
	}
}

export const changeLoadingStatus = (status, dispatch) => {
	const loading = {
		type: 'SET_LOADING',
		status: status,
	};

	dispatch(loading);
};
