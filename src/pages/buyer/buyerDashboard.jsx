import DashboardPage from '../../components/dashboardPage/dashboardPage';
import PurchaseList from '../../components/purchaseList/purchaseList';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllPurchases } from '../../store/actions/purchaseActions';

const BuyerDashboard = ({ purchasesList, dispatch, isLoading }) => {
	const updateList = () => {
		getAllPurchases(dispatch);
	};

	useEffect(() => {
		updateList();
	}, []);

	return (
		<DashboardPage title='Solicitações' page='/'>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<PurchaseList purchasesList={purchasesList} />
			)}
		</DashboardPage>
	);
};
const mapStateToProps = (state) => ({
	purchasesList: state.purchaseReducer.purchasesList,
	isLoading: state.purchaseReducer.isLoading,
});

export default connect(mapStateToProps)(BuyerDashboard);
