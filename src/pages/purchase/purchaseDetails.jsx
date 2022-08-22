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

	console.log(state.cotacoes.length)

	// useEffect(() => {
	// 	if (idCompra) {
	// 		setPurchaseToShow(idCompra, dispatch);
	// 	}
	// }, []);

	return (
		<DashboardPage title='Solicitação de Compra' page='#'>
				<Container>
					<InfoContainer>
						<h3>Nome: {state.name}</h3>
						<p>Descrição: {state.descricao}</p>
					</InfoContainer>
					<ItemsContainer>
						<h4>Itens</h4>
						{state.cotacoes.length > 0 ? (
							state.cotacoes[0].itemValorizadoDTOS.map((cotacao) => (
								<p key={cotacao.idItem}>
									{cotacao.quantidade} {cotacao.nome}
								</p>
							))
						) : (
							<p>Não existem itens cadastrados!</p>
						)}
					</ItemsContainer>

					<FormContainer>
						<h4>Nova Cotação</h4>
						<QuotationForm purchaseToShow={state} />
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
