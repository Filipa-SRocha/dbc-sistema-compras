import { useNavigate } from 'react-router-dom';
import { IconButton } from '../../components/buttons/buttons';
import { deletePurchase } from '../../store/actions/purchaseActions';

const DashboardMenu = ({ idCompra, dispatch }) => {
	const navigate = useNavigate();

	return (
		<div>
			<IconButton
				action='delete'
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					deletePurchase(idCompra, dispatch);
				}}
			/>
			<IconButton
				action='edit'
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					navigate(`/editar-compra/${idCompra}`);
				}}
			/>
		</div>
	);
};

export { DashboardMenu };
