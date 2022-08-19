import { useParams } from 'react-router-dom';
import DashboardPage from '../../components/dashboardPage/dashboardPage';
import FullPurchaseForm from './fullPurchaseForm';
import { editPurchase } from '../../store/actions/purchaseActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EditPurchasePage = ({ isLoading, dispatch }) => {
	const navigate = useNavigate();
	const { idCompra } = useParams();

	useEffect(() => {
		if (idCompra) {
			editPurchase(idCompra, dispatch, navigate);
		}
	}, []);

	return (
		<DashboardPage page={'none'} title='Editar Compra'>
			<>
				{isLoading ? (
					<h1>Loading</h1>
				) : (
					<FullPurchaseForm idCompra={idCompra} />
				)}
			</>
		</DashboardPage>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.purchaseReducer.isLoading,
});

export default connect(mapStateToProps)(EditPurchasePage);
