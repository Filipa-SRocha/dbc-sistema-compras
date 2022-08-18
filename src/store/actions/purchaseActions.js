import { api } from '../../api';
import { convertToDateObject } from '../../utils/masks';

export async function handleNewPurchase(values, navigate) {
	try {
		const newPurchase = {
			name: values.name,
			descricao: values.descricao,
			itens: values.items,
		};

		await api.post('/colaborador/nova-compra', newPurchase);
		navigate('/');
	} catch (error) {
		console.log('Não foi possível concluir a sua solicitação', error);
	}
}

export async function getAllPurchases(dispatch) {
	try {
		const { data } = await api.get('/colaborador/compras');

		const newList = {
			type: 'GET_PURCHASES',
			list: data,
		};

		//convert dataCompra to date Object
		data.forEach((purchase) => {
			purchase.dataCompra = convertToDateObject(purchase.dataCompra);
		});

		//Ascending Data Filter
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
