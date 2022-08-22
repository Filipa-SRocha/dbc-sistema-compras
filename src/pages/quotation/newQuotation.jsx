import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import QuotationForm from './quotationForm';

const NewQuotation = () => {
	const { state } = useLocation();

	// useEffect(() => {
	// 	if (idCompra) {
	// 		setPurchaseToShow(idCompra, dispatch);
	// 	}
	// }, []);

	return (
		<DashboardPage>
				<QuotationForm purchaseToShow={state} />
		</DashboardPage>
	);
};


export default NewQuotation;
