import DashboardPage from '../../components/dashboardPage/dashboardPage';
import PurchaseList from '../../components/purchaseList/purchaseList';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getBuyerPurchaseList } from '../../store/actions/buyerAction';

const BuyerDashboard = ({ purchasesList, dispatch, isLoading }) => {
	const updateList = () => {
		getBuyerPurchaseList(dispatch);
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
	purchasesList: state.buyerReducer.purchasesList,
	isLoading: state.buyerReducer.isLoading,
});

export default connect(mapStateToProps)(BuyerDashboard);
