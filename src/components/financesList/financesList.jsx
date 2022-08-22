import { connect } from 'react-redux';
import {
	ManagerListContainer,
	PurchaseContainer,
	QuotationsContainer,
} from '../managerList/managerList.styled';
import { PurchaseInfo, QuotationInfo } from './financesListItems';
import FinancesMenu from '../../pages/finances/financesMenu';

const FinancesList = ({ purchasesList, dispatch }) => {
	if (
		purchasesList.filter((purchase) => purchase.status === 'APROVADO_GESTOR')
			.length <= 0
	) {
		return <h1>Não existem compras para serem aprovadas!</h1>;
	}

	return (
		<div>
			<ManagerListContainer>
				{purchasesList
					.filter((purchase) => purchase.status === 'APROVADO_GESTOR')
					.map((purchase) => (
						<PurchaseContainer key={'compra' + purchase.idCompra}>
							<PurchaseInfo purchase={purchase} />
							<div>
								<FinancesMenu
									idCompra={purchase.idCompra}
									dispatch={dispatch}
								/>
							</div>
							<h4>Cotações</h4>
							<QuotationsContainer>
								{purchase.cotacoes.map((cotacao) => (
									<div key={`cotacao${cotacao.idCotacao}`}>
										<QuotationInfo cotacao={cotacao} />
									</div>
								))}
							</QuotationsContainer>
						</PurchaseContainer>
					))}
			</ManagerListContainer>
			<hr />
			{purchasesList
				.filter(
					(purchase) =>
						purchase.status === 'APROVADO_FINANCEIRO' ||
						purchase.status === 'REPROVADO_FINANCEIRO'
				)
				.map((purchase) => (
					<PurchaseContainer key={'compra' + purchase.idCompra}>
						<p>{purchase.status.split('_')[0]}</p>
						<PurchaseInfo purchase={purchase} />

						<h4>Cotações</h4>
						<QuotationsContainer>
							{purchase.cotacoes.map((cotacao) => (
								<div key={`cotacao${cotacao.idCotacao}`}>
									<QuotationInfo cotacao={cotacao} />
								</div>
							))}
						</QuotationsContainer>
					</PurchaseContainer>
				))}
		</div>
	);
};
const mapStateToProps = (state) => ({
	cargo: state.userReducer.user.cargos[0].name,
	purchasesList: state.financesReducer.purchasesList,
});

export default connect(mapStateToProps)(FinancesList);
