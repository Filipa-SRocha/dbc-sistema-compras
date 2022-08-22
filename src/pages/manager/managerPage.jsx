import { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import ManagerList from '../../components/managerList/managerList';
import PurchaseList from '../../components/purchaseList/purchaseList';
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
				// <PurchaseList
				// 	purchasesList={purchasesList.map((purchase) => purchase.compraDTO)}
				// />
				<ManagerList />
			)}
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchasesList: state.managerReducer.purchasesList,
	isLoading: state.managerReducer.isLoading,
});

export default connect(mapStateToProps)(ManagerPage);
