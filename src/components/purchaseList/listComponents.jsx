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
import { IconButton } from '../buttons/buttons';
import { useNavigate } from 'react-router-dom';
import {
	deletePurchase,
	setPurchaseToShow,
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

export const ListMenu = ({ idCompra, dispatch }) => {
	const navigate = useNavigate();

	return (
		<div>
			<IconButton
				type='delete'
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					deletePurchase(idCompra, dispatch);
				}}
			/>
			<IconButton
				type='edit'
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					navigate(`/editar-compra/${idCompra}`);
				}}
			/>
		</div>
	);
};

export const BotaoCotacao = (purchase, dispatch) => {
	const navigate = useNavigate();

	const cotar = (e) => {
		e.preventDefault();
		e.stopPropagation();
		navigate(`/details-page/${purchase.idCompra}`);
		setPurchaseToShow(purchase, dispatch);
	};

	return <button onClick={cotar}> COTAÇÃO</button>;
};

export const ListItem = ({ purchase, dispatch }) => {
	const navigate = useNavigate();
	const variavelTesteComprador = false;

	const openDetailsPage = () => {
		navigate(`/details-page/${purchase.idCompra}`);
		setPurchaseToShow(purchase, dispatch);
	};
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

			{variavelTesteComprador ? (
				<BotaoCotacao purchase={purchase} dispatch={dispatch} />
			) : (
				<ListMenu idCompra={purchase.idCompra} dispatch={dispatch} />
			)}
		</PurchaseItem>
	);
};
