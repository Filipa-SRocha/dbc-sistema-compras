import SaleForm from '../saleForm';
import DashboardPage from '../../../components/dashboardPage/dashboardPage';

const NewSalePage = () => {
	return (
		<DashboardPage title='Solicitação de Compra'>
			<>
				<SaleForm />
			</>
		</DashboardPage>
	);
};
export default NewSalePage;
