import { CgRename } from 'react-icons/cg';
import { BsCalendar2Date, BsJournalCheck } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';

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

export const ListItem = ({ list }) => {
	return (
		<PurchaseItem>
			<span>Teste</span>
			<span>15/08/2022</span>
			<span>R$ 200</span>
			<span>Nome do arquivo.pdf</span>
			<span>Reprovado</span>
		</PurchaseItem>
	);
};
