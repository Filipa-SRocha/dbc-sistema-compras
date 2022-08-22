import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	changeQuotationStatus,
	getNumberPurchaseQuotations,
} from '../../store/actions/quotationAction';

const BuyerMenu = ({ idCompra, compra }) => {
	const [canBeApproved, setCanBeApproved] = useState(false);
	const navigate = useNavigate();

	const cotar = (e) => {
		e.preventDefault();
		e.stopPropagation();
		navigate(`/comprador/nova-cotacao`, { state: compra });
	};

	const sendToApproval = (e) => {
		e.preventDefault();
		e.stopPropagation();

		changeQuotationStatus(idCompra);
	};

	const setup = async () => {
		const number = await getNumberPurchaseQuotations(idCompra);
		setCanBeApproved(number >= 2);
		console.log(number);
	};

	useEffect(() => {
		setup();
	}, []);

	return (
		<div>
			<button onClick={cotar}> COTAR</button>
			<button disabled={!canBeApproved} onClick={sendToApproval}>
				Enviar para aprovação
			</button>
		</div>
	);
};
export default BuyerMenu;
