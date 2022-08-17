import { api } from '../../api';

export async function handleNewSale(values, navigate) {
	try {
		const newSale = {
			name: values.name,
			descricao: values.descricao,
			itens: values.items,
		};

		await api.post('/colaborador/nova-compra', newSale);
		navigate('/');
	} catch (error) {
		console.log('Não foi possível concluir a sua solicitação', error);
	}
}
