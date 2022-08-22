import { connect } from 'react-redux';
import FinancesMenu from '../../pages/finances/financesMenu';
import ManagerMenu from '../../pages/manager/managerMenu';
import {
	ManagerListContainer,
	PurchaseContainer,
	QuotationsContainer,
} from './managerList.styled';

const ManagerList = ({ purchasesList, cargo, isLoading, dispatch }) => {
	return (
		<div>
			<ManagerListContainer>
				{purchasesList
					.filter((purchase) => purchase.status === 'COTADO')
					.map((purchase) => (
						<PurchaseContainer key={'compra' + purchase.idCompra}>
							<div>
								<h3> {purchase.name}</h3>
								<p>{purchase.dataCompra}</p>
								<small>{purchase.descricao}</small>
								{cargo === 'ROLE_FINANCEIRO' && <p>Valor Final: {}</p>}
							</div>
							<div>
								{cargo === 'ROLE_FINANCEIRO' ? (
									<FinancesMenu
										idCompra={purchase.idCompra}
										dispatch={dispatch}
									/>
								) : (
									<></>
								)}
							</div>
							<h4>Cotações</h4>
							<QuotationsContainer>
								{purchase.cotacoes.map((cotacao) => (
									<div key={`cotacao${cotacao.idCotacao}`}>
										<h5>{cotacao.nome}</h5>
										<p>Valor Total: {cotacao.valor}</p>
										<h6>Itens</h6>
										{cotacao.itemValorizadoDTOS.map((item) => (
											<p>
												{item.quantidade} x {item.nome} = {item.valorTotal}
											</p>
										))}
										{cargo === 'ROLE_GESTOR' ? (
											<ManagerMenu
												idCotacao={cotacao.idCotacao}
												dispatch={dispatch}
											/>
										) : (
											<></>
										)}
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
	purchasesList: state.managerReducer.purchasesList,
});

export default connect(mapStateToProps)(ManagerList);
