import { connect } from 'react-redux';
import {
	ManagerListContainer,
	PurchaseContainer,
	QuotationsContainer,
} from '../managerList/managerList.styled';
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
							<div>
								<h3> {purchase.name}</h3>
								<p>{purchase.dataCompra}</p>
								<small>{purchase.descricao}</small>
								<p>Valor Final: {purchase.valorTotal}</p>
							</div>
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
										{cotacao.status === 'APROVADA' && <p>Cotação aprovada!</p>}
										<h5>{cotacao.nome}</h5>
										<p>Valor Total: {cotacao.valor}</p>
										<h6>Itens</h6>
										{cotacao.itemValorizadoDTOS.map((item) => (
											<p>
												{item.quantidade} x {item.nome} = {item.valorTotal}
											</p>
										))}
									</div>
								))}
							</QuotationsContainer>
						</PurchaseContainer>
					))}
			</ManagerListContainer>
		</div>
	);
};
const mapStateToProps = (state) => ({
	cargo: state.userReducer.user.cargos[0].name,
	purchasesList: state.financesReducer.purchasesList,
});

export default connect(mapStateToProps)(FinancesList);
