import { api } from '../../api';

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
