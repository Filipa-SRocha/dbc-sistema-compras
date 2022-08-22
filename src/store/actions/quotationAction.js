import { api } from '../../api';
import { getAllPurchases } from './purchaseActions';
import { toast } from 'react-toastify';
import nProgress from 'nprogress';

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
		const { data } = await api.get(`/comprador/listar`);
		
		const compra = data.find(compra => compra.idCompra === idCompra);
		
		return compra.cotacoes.length;
		
	} catch (error) {
		console.log(
			'Não foi possível obter lista de cotações. Erro no servidor',
			error
		);
	}
}

export async function handleNewQuotation(idCompra, values, navigate) {
	try {
		nProgress.start();
		await api.post(`/comprador/cotar?idCompra=${idCompra}`, values);

		toast.success('Cotação cadastrada com sucesso!', {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		navigate(`/`);
	} catch (error) {
		console.log('Não foi possível adicionar cotação. Erro no servidor', error);
		
		toast.error('Não foi possível adicionar a cotação!', {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	} finally {
		nProgress.done();
	}
}

export async function changeQuotationStatus(idCompra) {
	try {
		await api.put(`/comprador/concluir-cotacao?idCompra=${idCompra}`);
		toast.success('Cotação concluída!', {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	} catch (error) {
		console.log(
			'Não foi possivel enviar as cotações para aprovação do gestor',
			error
		);

		toast.error('Não foi possível enviar as cotações para o gestor!', {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}
}

export const changeLoadingStatus = (status, dispatch) => {
	const loading = {
		type: 'SET_Q_LOADING',
		status: status,
	};

	dispatch(loading);
};
