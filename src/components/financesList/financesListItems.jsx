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
			{purchase.cotacoes.map((cotacao) => (
				<div key={cotacao.idCotacao}>
					{cotacao.status === 'APROVADO' && <strong>Valor Final: {cotacao.valor}</strong>}
				</div>
			))}
		</InfoContainer>
	);
};

export const QuotationInfo = ({ cotacao }) => {
	
	console.log(cotacao)

	return (
		<>
			{cotacao.status === 'APROVADA' && <p>Cotação aprovada!</p>}
			<h5>{cotacao.nome}</h5>

			<ListItemsHeader>
				<p>Qtd</p>
				<p>Item</p>
				<p>Valor Total</p>
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
