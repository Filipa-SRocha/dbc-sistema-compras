import { useParams } from 'react-router-dom';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import FullPurchaseForm from './fullPurchaseForm';

const EditPurchasePage = () => {
	const { idCompra } = useParams();

	//fazer logica do get compra, set compra a editar no reducer, quando houver endpoint

	return (
		<DashboardPage page={'none'} title='Editar Compra'>
			<>
				<FullPurchaseForm idCompra={idCompra} />
			</>
		</DashboardPage>
	);
};
export default EditPurchasePage;
