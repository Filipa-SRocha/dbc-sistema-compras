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
		console.log('Getting list data...');

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
		console.log(
			'Não foi possível atualizar a lista de solicitações. Erro no servidor',
			error
		);
	}
}

export async function deletePurchase(id) {
	try {
		await api.delete(`/colaborador/compra/${id}`);
	} catch (error) {
		console.log(
			'Não foi possível eliminar esta solicitação. Erro no servidor',
			error
		);
	}
}

export function editPurchase(purchase, dispatch) {
	const edit = {
		type: 'SET_PURCHASE_TO_EDIT',
		purchase: purchase,
	};
	dispatch(edit);
}

export async function handleEditPurchase(
	values,
	idCompra,
	dispatch,
	navigate,
	resetForm
) {
	try {
		await api.put(`/colaborador/compra/${idCompra}`, values);

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