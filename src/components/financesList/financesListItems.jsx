import { InfoContainer } from './financesList.styled';
import moment from 'moment';
import { convertToDateObject } from '../../utils/masks';
import { ListItems, ListItemsHeader } from '../managerList/managerList.styled';

export const PurchaseInfo = ({ purchase }) => {
	return (
		<InfoContainer>
			<div>
				<h3> {purchase.name}</h3>
				<p>{moment(convertToDateObject(purchase.dataCompra)).format('ll')}</p>
			</div>
			<small>{purchase.descricao}</small>
			<p>Valor Final: {purchase.valorTotal}</p>
		</InfoContainer>
	);
};

export const QuotationInfo = ({ cotacao }) => {
	return (
		<>
			{cotacao.status === 'APROVADA' && <p>Cotação aprovada!</p>}
			<h5>{cotacao.nome}</h5>
			<p>Valor Total: {cotacao.valor}</p>

			<ListItemsHeader>
				<p>Qtd</p>
				<p>Item</p>
				<p>Valor</p>
			</ListItemsHeader>

			{cotacao.itemValorizadoDTOS.map((item) => (
				<ListItems>
					<p>{item.quantidade}</p>
					<p>{item.nome}</p>
					<p> {item.valorTotal}</p>
				</ListItems>
			))}
		</>
	);
};
