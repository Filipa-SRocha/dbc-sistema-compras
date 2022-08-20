import { useParams } from 'react-router-dom';
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
	const { idCompra } = useParams();

	const setup = async () => {
		await setPurchaseToShow(idCompra, dispatch);
		changeLoadingStatus(false, dispatch);
	};

	useEffect(() => {
		if (idCompra) {
			setup();
		}
	}, []);
	//checkar o tipo de usuario, se for comprador
	const variavelTesteComprador = false;
	const variavelTesteNovaCotacao = false;

	return (
		<DashboardPage title='Solicitação de Compra' page='#'>
			{isLoading ? (
				<h1>LoadingP</h1>
			) : (
				<Container>
					<InfoContainer>
						<h3>{purchaseToShow.name}</h3>
						<p>{purchaseToShow.descricao}</p>
					</InfoContainer>
					<ItemsContainer>
						<h4>Itens</h4>
						{purchaseToShow.itens ? (
							purchaseToShow.itens.map((item) => (
								<p key={item.idItem}>
									{item.quantidade} {item.nome}
								</p>
							))
						) : (
							<p>Não existem itens cadastrados!</p>
						)}
					</ItemsContainer>
					<FormContainer>
						<h4>Nova Cotação</h4>
						<QuotationForm purchaseToShow={purchaseToShow} />
					</FormContainer>
					<CotacoesContainer>
						<h4>Todas as cotações</h4>
						<QuotationList />
					</CotacoesContainer>
				</Container>
			)}
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchaseToShow: state.purchaseReducer.purchaseToShow,
	isLoading: state.purchaseReducer.isLoading,
});

export default connect(mapStateToProps)(PurchaseDetails);
