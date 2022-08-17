import { api } from '../../api';

export async function handleNewSale(values, dispatch, navigate) {
	try {
		const newSale = {
			name: values.name,
			status: values.status,
			valor: 0,
		};

		//const teste = await api.post('/compra/create', newSale);
		//console.log('Retorno API', teste);
		console.log('Ation Sale, valores=>');
		console.log(values);

		//dispatch();

		//navigate('/');
	} catch (error) {
		console.log('Não foi possível concluir a sua solicitação', error);
	}
}
