import { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import {
	getPurchasesWithQuotations,
	manageQuotation,
} from '../../store/actions/managerActions';

const ManagerPage = ({ isLoading, purchasesList, dispatch }) => {
	useEffect(() => {
		getPurchasesWithQuotations(dispatch);
		console.log(purchasesList);
	}, []);

	// Falta endpoint a mostrar cotações de cada compra. Depois cada cotação pode ser aprovada ou recusada

	return (
		<DashboardPage title='Aprovação de Cotações' page='/'>
			<h1>Teste</h1>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<h1>
					{purchasesList.map((cotacao) => (
						<div>
							{cotacao.status === 'COTADO' ? (
								<>
									<p>{cotacao.nome}</p>
									<button
										value='APROVAR'
										onClick={(e) =>
											manageQuotation(
												cotacao.idCotacao,
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
											manageQuotation(
												cotacao.idCotacao,
												e.target.value,
												dispatch
											)
										}
									>
										Reprovar
									</button>
								</>
							) : null}
						</div>
					))}
				</h1>
			)}
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchasesList: state.managerReducer.purchasesList,
	isLoading: state.managerReducer.isLoading,
});

export default connect(mapStateToProps)(ManagerPage);
