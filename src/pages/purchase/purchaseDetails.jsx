import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardPage from '../../components/dashboardPage/dashboardPage';

import {
	Container,
	InfoContainer,
	ItemsContainer,
	FormContainer,
	CotacoesContainer,
} from './purchaseDetails.styled';

import { useEffect } from 'react';
import {
	changeLoadingStatus,
	setPurchaseToShow,
} from '../../store/actions/purchaseActions';
import QuotationForm from '../quotation/quotationForm';
import QuotationList from '../quotation/quotationList';

const PurchaseDetails = ({ isLoading, dispatch, purchaseToShow }) => {
	const { state } = useLocation();

	// console.log(state.cotacoes.length)

	useEffect(() => {
		if (state.idCompra) {
			setPurchaseToShow(state.idCompra, dispatch);
		}
	}, []);

	console.log(purchaseToShow)

	return (
		<DashboardPage title='Solicitação de Compra' page='#'>
				<Container>
					<InfoContainer>
						<h3>Nome: {state.name}</h3>
						<p>Descrição: {state.descricao}</p>
					</InfoContainer>
					<ItemsContainer>
						<h4>Itens</h4>
						{purchaseToShow.itens && purchaseToShow.itens.length > 0 ? (
							purchaseToShow.itens.map((item) => (
								<p key={item.idItem}>
									{item.quantidade} - {item.nome}
								</p>
							))
						) : (
							<p>Não existem itens cadastrados!</p>
						)}
					</ItemsContainer>

					<FormContainer>
						<h4>Nova Cotação</h4>
						{purchaseToShow.idCompra && <QuotationForm purchaseToShow={purchaseToShow} />}
						{/* {purchaseToShow.itens.length > 0 && <h4>Nova Cotação</h4>} */}
						{/* {purchaseToShow.itens.length > 0 && <QuotationForm purchaseToShow={purchaseToShow} />} */}
					</FormContainer>
					<CotacoesContainer>
						<h4>Todas as cotações</h4>
						{state.cotacoes.length > 0 ? <QuotationList cotacoes={state.cotacoes} /> : <p>Não há cotações ainda</p>}
					</CotacoesContainer>
				</Container>
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchaseToShow: state.purchaseReducer.purchaseToShow,
});

export default connect(mapStateToProps)(PurchaseDetails);
