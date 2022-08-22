import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	changeQuotationStatus,
	getNumberPurchaseQuotations,
} from '../../store/actions/quotationAction';
import { ButtonContainer, AprovarButton, CotarButton } from './buyerMenu.styled';
import { BsListCheck, BsBagCheck } from 'react-icons/bs'

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
		console.log(number);
		setCanBeApproved(number >= 2);
	};

	useEffect(() => {
		setup();
	}, []);

	return (
		<ButtonContainer>
			<CotarButton onClick={cotar}><BsListCheck /></CotarButton>
			<AprovarButton disabled={!canBeApproved} onClick={sendToApproval}>
				<BsBagCheck />
			</AprovarButton>
		</ButtonContainer>
	);
};
export default BuyerMenu;
