import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPurchases } from '../../store/actions/financesAction';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import FinancesList from '../../components/financesList/financesList';

const FinancesPage = ({ isLoading, purchasesList, dispatch }) => {
	useEffect(() => {
		getPurchases(dispatch);
	}, []);

	return (
		<DashboardPage title='Aprovação de Compras' page='/'>
			{isLoading ? <h1>Loading</h1> : <FinancesList />}
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.financesReducer.isLoading,
});

export default connect(mapStateToProps)(FinancesPage);
