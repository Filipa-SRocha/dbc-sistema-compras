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
import { ManagerMenu } from '../../pages/manager/managerMenu';

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

export const ListItem = ({ cargos, purchase, dispatch }) => {
	const navigate = useNavigate();

	const openDetailsPage = () => {
		navigate(`/details-page`, { state: purchase });
	};

	return (
		<PurchaseItem onClick={openDetailsPage}>
			<span>{purchase && purchase.name}</span>
			<span>{moment(purchase && purchase.dataCompra).format('ll')}</span>
			{purchase && purchase.valor ? <span>{purchase && purchase.valor}</span> : <span> - </span>}
			<span> - </span>
			<span>{purchase && purchase.status}</span>

			{/* Logica a depender do cargo */}
			{cargos[0]?.name === 'ROLE_COLABORADOR' && purchase.status === 'ABERTO' ? (
				<DashboardMenu idCompra={purchase.idCompra} dispatch={dispatch} />
			) : (
				<></>
			)}

			{(cargos[0]?.name === 'ROLE_COMPRADOR' && purchase.status === 'ABERTO') ||
			(cargos[0]?.name === 'ROLE_COMPRADOR' &&
				purchase.status === 'EM_COTACAO') ? (
				<BuyerMenu idCompra={purchase.idCompra} compra={purchase} />
			) : (
				<></>
			)}

			{cargos[0]?.name === 'ROLE_GESTOR' && purchase.status === 'COTADO' ? (
				<ManagerMenu idCompra={purchase.idCompra} dispatch={dispatch} />
			) : (
				<></>
			)}
		</PurchaseItem>
	);
};
