import DashboardPage from '../../components/dashboardPage/dashboardPage';
import PurchaseList from '../../components/purchaseList/purchaseList';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getBuyerPurchaseList } from '../../store/actions/buyerAction';
import { Container, DashboardContainer } from './buyerDashboard.styled';
import AsideMenu from '../../components/asideMenu/asideMenu';
import Header from '../../components/header/header';

const BuyerDashboard = ({ purchasesList, dispatch, isLoading }) => {

	const updateList = () => {
		getBuyerPurchaseList(dispatch);
	};

	useEffect(() => {
		updateList();
	}, []);

	return (
		<Container>
			<AsideMenu />
			<DashboardContainer>
				<Header />
				<h2>Solicitações</h2>
					<PurchaseList purchasesList={purchasesList} />
			</DashboardContainer>
		</Container>
	);
};
const mapStateToProps = (state) => ({
	purchasesList: state.buyerReducer.purchasesList,
	isLoading: state.buyerReducer.isLoading,
});

export default connect(mapStateToProps)(BuyerDashboard);
