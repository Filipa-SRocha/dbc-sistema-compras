import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import QuotationForm from './quotationForm';
import { setPurchaseToShow } from '../../store/actions/purchaseActions';
import { connect } from 'react-redux'
import { NovaCotacao } from './quotation.styled'

const NewQuotation = ({ purchaseToShow, dispatch }) => {
	const { state } = useLocation();

	console.log(state)

	useEffect(() => {
		if (state.idCompra) {
			setPurchaseToShow(state.idCompra, dispatch);
		}
	}, []);

	console.log(purchaseToShow);

	return (
		<DashboardPage>
				<NovaCotacao>
					<h2>Nova cotação</h2>
					{purchaseToShow && <QuotationForm purchaseToShow={purchaseToShow} />}
				</NovaCotacao>
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	purchaseToShow: state.purchaseReducer.purchaseToShow,
})

export default connect(mapStateToProps)(NewQuotation);
