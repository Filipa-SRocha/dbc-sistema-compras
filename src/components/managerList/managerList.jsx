import { connect } from 'react-redux';
import { CancelQuotation, ManagerMenu } from '../../pages/manager/managerMenu';
import {
	InfoContainer,
	ListItems,
	ManagerListContainer,
	PurchaseContainer,
	QuotationsContainer,
	ListItemsHeader,
} from './managerList.styled';
import { convertToDateObject } from '../../utils/masks';
import moment from 'moment';

const ManagerList = ({ purchasesList, cargo, isLoading, dispatch }) => {
	if (
		purchasesList.filter((purchase) => purchase.status === 'COTADO').length <= 0
	) {
		return <h1>Sem Cotações para aprovar!</h1>;
	}
	return (
		<div>
			<ManagerListContainer>
				{purchasesList
					.filter((purchase) => purchase.status === 'COTADO')
					.map((purchase) => (
						<PurchaseContainer key={'compra' + purchase.idCompra}>
							<InfoContainer>
								<div>
									<h3> {purchase.name}</h3>
									<p>
										{moment(convertToDateObject(purchase.dataCompra)).format(
											'll'
										)}
									</p>
									<CancelQuotation
										idCotacao={purchase.cotacoes[0].idCotacao}
										dispatch={dispatch}
									/>
								</div>
								<small>{purchase.descricao}</small>
							</InfoContainer>

							<h4>Cotações</h4>
							<QuotationsContainer>
								{purchase.cotacoes.map((cotacao) => (
									<div key={`cotacao${cotacao.idCotacao}`}>
										<h5>{cotacao.nome}</h5>

										<ListItemsHeader>
											<p>Qtd</p>
											<p>Item</p>
											<p>Valor</p>
										</ListItemsHeader>

										{cotacao.itemValorizadoDTOS.map((item) => (
											<ListItems>
												<p>{item.quantidade}</p>
												<p>{item.nome}</p>
												<p>{item.valorTotal}</p>
											</ListItems>
										))}

										<p>Valor Total: {cotacao.valor}</p>
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
