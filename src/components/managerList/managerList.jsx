import { connect } from 'react-redux';
import ManagerMenu from '../../pages/manager/managerMenu';
import {
	ManagerListContainer,
	PurchaseContainer,
	QuotationsContainer,
} from './managerList.styled';

const ManagerList = ({ purchasesList, isLoading, dispatch }) => {
	return (
		<div>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<ManagerListContainer>
					{purchasesList
						.filter((purchase) => purchase.status === 'COTADO')
						.map((purchase) => (
							<PurchaseContainer key={'compra' + purchase.idCompra}>
								<h3> {purchase.name}</h3>
								<p>{purchase.dataCompra}</p>
								<small>{purchase.descricao}</small>
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
											<ManagerMenu
												idCotacao={cotacao.idCotacao}
												dispatch={dispatch}
											/>
										</div>
									))}
								</QuotationsContainer>
							</PurchaseContainer>
						))}
				</ManagerListContainer>
			)}
		</div>
	);
};

// {quotation.status === 'COTADO' ? <ManagerMenu idCotacao={quotation.idCotacao} dispatch={dispatch}/>: <></>}

const mapStateToProps = (state) => ({
	purchasesList: state.managerReducer.purchasesList,
	isLoading: state.managerReducer.isLoading,
	purchasesIds: state.managerReducer.purchasesIds,
	onlyPurchaseInfo: state.managerReducer.onlyPurchaseInfo,
});

export default connect(mapStateToProps)(ManagerList);
