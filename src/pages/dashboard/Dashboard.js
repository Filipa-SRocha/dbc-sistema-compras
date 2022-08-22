import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllPurchases } from '../../store/actions/purchaseActions';
import AsideMenu from '../../components/asideMenu/asideMenu';
import { Container, DashboardContainer } from './dashboard.styled';
import Header from '../../components/header/header';
import PurchaseList from '../../components/purchaseList/purchaseList';

const Dashboard = ({ isLoading, purchasesList, dispatch }) => {
	const updateList = () => {
		getAllPurchases(dispatch);
	};

	useEffect(() => {
		updateList();
	}, []);

	console.log(purchasesList)

	return (
		<div>
			<Container>
				<AsideMenu></AsideMenu>
				<DashboardContainer>
					<Header />
					{isLoading ? (
						<h1>Loadinng..</h1>
					) : (
						<PurchaseList purchasesList={purchasesList} />
					)}
				</DashboardContainer>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => ({
	purchasesList: state.purchaseReducer.purchasesList,
	isLoading: state.purchaseReducer.isLoading,
});

export default connect(mapStateToProps)(Dashboard);
