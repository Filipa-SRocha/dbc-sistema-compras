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

export const ListItem = ({ purchase }) => {
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
		</PurchaseItem>
	);
};
