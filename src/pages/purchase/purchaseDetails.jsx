import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardPage from '../../components/dashboardPage/dashboardPage';

import {
	DetailsContainer,
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
import AsideMenu from '../../components/asideMenu/asideMenu';
import { Container, DashboardContainer } from '../dashboard/dashboard.styled';
import Header from '../../components/header/header';

const PurchaseDetails = ({ isLoading, cargos, dispatch, purchaseToShow }) => {
	const { state } = useLocation();

	// console.log(state.cotacoes.length)

	useEffect(() => {
		if (state.idCompra) {
			setPurchaseToShow(state.idCompra, dispatch);
		}
	}, []);

	console.log(cargos);

	return (
		<div>
				<Container>
					<AsideMenu />
					<DashboardContainer>
						<Header />
						<DetailsContainer>
							<InfoContainer>
								<p><strong>Nome:</strong> {state.name}</p>
								<p><strong>Descrição:</strong> {state.descricao}</p>
							</InfoContainer>
							<ItemsContainer>
								<h4>Itens</h4>
								
								<div className="itensListados">
									{purchaseToShow.itens && purchaseToShow.itens.length > 0 ? (
										purchaseToShow.itens.map((item) => (
											<div className="item" key={item.idItem}>
													<div className="itemListado">
														<strong>Quantidade</strong>
														<strong>Item</strong>
													</div>
												<div className='itemListado' >
													<p>{item.quantidade}</p>
													<p>{item.nome}</p>
												</div>
											</div>
										))
									) : (
										<p>Não existem itens cadastrados!</p>
									)}
								</div>
							</ItemsContainer>

							{((purchaseToShow.status === 'ABERTO' || purchaseToShow.status === 'EM_COTACAO') && cargos.some(item => item.name === 'ROLE_COMPRADOR'))  && <FormContainer>
								<h4>Nova Cotação</h4>
								{purchaseToShow.idCompra && <QuotationForm purchaseToShow={purchaseToShow} />}
							</FormContainer>}
							{(cargos.some(item => item.name === 'ROLE_COMPRADOR')) && <CotacoesContainer>
								<h4>Todas as cotações</h4>
								{state.cotacoes && state.cotacoes.length > 0 ? <QuotationList cotacoes={state.cotacoes} /> : <p>Não há cotações ainda</p>}
							</CotacoesContainer>}
						</DetailsContainer>
					</DashboardContainer>
					
				</Container>
		</div>
	);
};

const mapStateToProps = (state) => ({
	purchaseToShow: state.purchaseReducer.purchaseToShow,
	cargos: state.authReducer.auth.cargos
});

export default connect(mapStateToProps)(PurchaseDetails);
