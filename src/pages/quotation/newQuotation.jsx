import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import { setPurchaseToShow } from '../../store/actions/purchaseActions';
import QuotationForm from './quotationForm';
import { connect } from 'react-redux';

const NewQuotation = ({ isLoading, purchaseToShow, dispatch }) => {
	const { idCompra } = useParams();

	useEffect(() => {
		if (idCompra) {
			setPurchaseToShow(idCompra, dispatch);
		}
	}, []);

	return (
		<DashboardPage>
			{isLoading ? (
				<h1>Loadinggg</h1>
			) : (
				<QuotationForm purchaseToShow={purchaseToShow} />
			)}
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchaseToShow: state.purchaseReducer.purchaseToShow,
	isLoading: state.purchaseReducer.isLoading,
});

export default connect(mapStateToProps)(NewQuotation);
