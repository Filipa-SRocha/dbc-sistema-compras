import DashboardPage from '../../../components/dashboardPage/dashboardPage';

import FullPurchaseForm from '../fullPurchaseForm';

const NewPurchasePage = () => {
	return (
		<DashboardPage page={'/solicitacao-compra'} title='Solicitação de Compra'>
			<>
				<FullPurchaseForm />
			</>
		</DashboardPage>
	);
};
export default NewPurchasePage;
