import DashboardPage from '../../../components/dashboardPage/dashboardPage';

import FullSaleForm from '../fullSaleForm';

const NewSalePage = () => {
	return (
		<DashboardPage page={'/solicitacao-compra'} title='Solicitação de Compra'>
			<>
				<FullSaleForm />
			</>
		</DashboardPage>
	);
};
export default NewSalePage;
