import { connect } from 'react-redux';
import ManagerMenu from '../../pages/manager/managerMenu';

const ManagerList = ({
	onlyPurchaseInfo,
	purchasesList,
	isLoading,
	purchasesIds,
    dispatch
}) => {
	return (
		<div>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<div>
					{onlyPurchaseInfo.map((purchase) => (
						<div>
							<h1>{purchase.name}</h1>
							<>
								{purchasesList
									.filter(
										(quote) => quote.compraDTO.idCompra === purchase.idCompra
									)
									.map((quotation) => (
										<div>
											<h4>{quotation.nome}</h4>
											{quotation.status === 'COTADO' ? <ManagerMenu idCotatcao={quotation.idCotacao} dispatch={dispatch}/>: <></>}
										</div>
									))}
							</>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	purchasesList: state.managerReducer.purchasesList,
	isLoading: state.managerReducer.isLoading,
	purchasesIds: state.managerReducer.purchasesIds,
	onlyPurchaseInfo: state.managerReducer.onlyPurchaseInfo,
});

export default connect(mapStateToProps)(ManagerList);
