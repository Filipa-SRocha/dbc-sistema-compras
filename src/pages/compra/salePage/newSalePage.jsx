import SaleForm from '../saleForm';
import DashboardPage from '../../../components/dashboardPage/dashboardPage';
import ItemForm from '../itemForm';

const NewSalePage = () => {
	return (
		<DashboardPage title='Solicitação de Compra'>
			<>
				<SaleForm />
				<ItemForm />
			</>
		</DashboardPage>
	);
};
export default NewSalePage;
