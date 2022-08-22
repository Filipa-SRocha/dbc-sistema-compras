import { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import ManagerList from '../../components/managerList/managerList';
import { getPurchasesWithQuotations } from '../../store/actions/managerActions';

const ManagerPage = ({ isLoading, dispatch }) => {
	useEffect(() => {
		getPurchasesWithQuotations(dispatch);
	}, []);

	return (
		<DashboardPage title='Aprovação de Cotações' page='/'>
			{isLoading ? <h1>Loading</h1> : <ManagerList />}
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.managerReducer.isLoading,
});

export default connect(mapStateToProps)(ManagerPage);
