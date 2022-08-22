import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	getPurchases,
	manageFinancesApproval,
} from '../../store/actions/financesAction';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import PurchaseList from '../../components/purchaseList/purchaseList';

const FinancesPage = ({ isLoading, purchasesList, dispatch }) => {
	useEffect(() => {
		getPurchases(dispatch);
		console.log(purchasesList);
	}, []);

	return (
		<DashboardPage title='Aprovação de Compras' page='/'>
			<PurchaseList purchasesList={purchasesList} />

			{/* <h1>Teste</h1>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<h1>
					{purchasesList.map((purchase) => (
						<div>
							{purchase.status === 'APROVADO_GESTOR' ? (
								<>
									<p>{purchase.name}</p>
									<small>Colaborador: {purchase.nomeDoUsuario}</small>
									<p>Valor Total: {purchase.valor}</p>
									<div>
										<h5>Itens</h5>
										{purchase.itens.map((item) => (
											<p>
												{item.quantidade} {item.nome}
											</p>
										))}
									</div>
									<button
										value='APROVAR'
										onClick={(e) =>
											manageFinancesApproval(
												purchase.idCompra,
												e.target.value,
												dispatch
											)
										}
									>
										Aprovar
									</button>
									<button
										value='REPROVAR'
										onClick={(e) =>
											manageFinancesApproval(
												purchase.idCotacao,
												e.target.value,
												dispatch
											)
										}
									>
										Reprovar
									</button>
								</>
							) : null}

							{purchase.status === 'APROVADO_FINANCEIRO' ? (
								<>
									<p>{purchase.name}</p>
									<small>Colaborador: {purchase.nomeDoUsuario}</small>
									<p>Valor Total: {purchase.valor}</p>
									<div>
										<h5>Itens</h5>
										{purchase.itens.map((item) => (
											<p>
												{item.quantidade} {item.nome}
											</p>
										))}
									</div>
								</>
							) : (
								<></>
							)}
						</div>
					))}
				</h1>
			)} */}
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchasesList: state.financesReducer.purchasesList,
	isLoading: state.financesReducer.isLoading,
});

export default connect(mapStateToProps)(FinancesPage);
