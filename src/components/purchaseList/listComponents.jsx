import { CgRename } from 'react-icons/cg';
import { BsCalendar2Date, BsJournalCheck } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';
import moment from 'moment';
import { BsThreeDotsVertical } from 'react-icons/bs';

import {
	PurchaseLabel,
	PurchaseLabelItem,
	PurchaseItem,
} from './purchaseList.styled';
import { IconButton } from '../buttons/buttons';
import { Navigate, useNavigate } from 'react-router-dom';
import {
	deletePurchase,
	editPurchase,
} from '../../store/actions/purchaseActions';

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

// dataCompra: "2022-08-17"
// descricao: "Compra de teste"
// idCompra: 44
// itens: (2) [{…}, {…}]
// name: "Compra 1"
// status: "aberto"
// valorTotal: null

export const ListMenu = ({ purchase, updateList, dispatch }) => {
	const navigate = useNavigate();

	return (
		<div>
			<IconButton
				type='delete'
				onClick={() => {
					console.log('delete');
					deletePurchase(purchase.idCompra);
					updateList();
				}}
			/>
			<IconButton
				type='edit'
				onClick={() => {
					editPurchase(purchase, dispatch);
					navigate(`/editar-compra/${purchase.idCompra}`);
				}}
			/>
		</div>
	);
};

export const ListItem = ({ purchase, updateList, dispatch }) => {
	return (
		<PurchaseItem>
			<span>{purchase.name}</span>
			<span>{moment(purchase.dataCompra).format('ll')}</span>
			{purchase.valorTotal ? (
				<span>purchase.valorTotal</span>
			) : (
				<span> - </span>
			)}
			<span> - </span>
			<span>{purchase.status}</span>
			<ListMenu
				purchase={purchase}
				updateList={updateList}
				dispatch={dispatch}
			/>
		</PurchaseItem>
	);
};
