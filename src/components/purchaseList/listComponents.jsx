import { CgRename } from 'react-icons/cg';
import { BsCalendar2Date, BsJournalCheck } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';
import moment from 'moment';

import {
	PurchaseLabel,
	PurchaseLabelItem,
	PurchaseItem,
} from './purchaseList.styled';
import { useNavigate } from 'react-router-dom';
import { DashboardMenu } from '../../pages/dashboard/dashboardMenu';
import BuyerMenu from '../../pages/buyer/buyerMenu';

export const ListHeader = () => {
	return (
		<PurchaseLabel>
			<PurchaseLabelItem>
				<CgRename />
				<span>Nome</span>
			</PurchaseLabelItem>
			<PurchaseLabelItem>
				<BsCalendar2Date />
				<span>Data</span>
			</PurchaseLabelItem>
			<PurchaseLabelItem>
				<MdAttachMoney />
				<span>Valor</span>
			</PurchaseLabelItem>
			<PurchaseLabelItem>
				<GrAttachment />
				<span>Anexo</span>
			</PurchaseLabelItem>
			<PurchaseLabelItem>
				<BsJournalCheck />
				<span>Situação</span>
			</PurchaseLabelItem>
		</PurchaseLabel>
	);
};

export const ListItem = ({ purchase, dispatch }) => {
	const navigate = useNavigate();

	const openDetailsPage = () => {
		navigate(`/details-page/${purchase.idCompra}`);
		// setPurchaseToShow(purchase, dispatch);
	};
	const tipoCargo = 'comprador';

	return (
		<PurchaseItem onClick={openDetailsPage}>
			<span>{purchase.name}</span>
			<span>{moment(purchase.dataCompra).format('ll')}</span>
			{purchase.valorTotal ? (
				<span>purchase.valorTotal</span>
			) : (
				<span> - </span>
			)}
			<span> - </span>
			<span>{purchase.status}</span>

			{/* Logica a depender do cargo */}
			{tipoCargo === 'colaborador' && purchase.status === 'ABERTO' ? (
				<DashboardMenu idCompra={purchase.idCompra} dispatch={dispatch} />
			) : (
				<></>
			)}

			{(tipoCargo === 'comprador' && purchase.status === 'ABERTO') ||
			purchase.status === 'EM_COTACAO' ? (
				<BuyerMenu idCompra={purchase.idCompra} />
			) : (
				<></>
			)}
		</PurchaseItem>
	);
};
