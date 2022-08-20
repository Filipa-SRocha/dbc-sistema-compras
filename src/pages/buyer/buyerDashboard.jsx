import DashboardPage from '../../components/dashboardPage/dashboardPage';
import PurchaseList from '../../components/purchaseList/purchaseList';
import { useNavigate } from 'react-router-dom';

const BuyerDashboard = () => {
	const BotaoCotacao = ({ idCompra }) => {
		const navigate = useNavigate();

		const cotar = (e) => {
			e.preventDefault();
			e.stopPropagation();
			navigate(`/details-page/${idCompra}`);
		};

		return <button onClick={cotar}> COTAÇÃO</button>;
	};

	const EndQuotation = ({ idCompra }) => {
		console.log('IDCompra swagger', idCompra);
		const sendToApproval = (e) => {
			e.preventDefault();
			e.stopPropagation();
		};

		return <button onClick={sendToApproval}>Enviar para aprovação</button>;
	};

	return (
		<DashboardPage title='Solicitações'>
			<PurchaseList />
		</DashboardPage>
	);
};
export default BuyerDashboard;
