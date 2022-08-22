export const PurchaseInfo = ({ purchase }) => {
	return (
		<div>
			<h3> {purchase.name}</h3>
			<p>{purchase.dataCompra}</p>
			<small>{purchase.descricao}</small>
			<p>Valor Final: {purchase.valorTotal}</p>
		</div>
	);
};

export const QuotationInfo = ({ cotacao }) => {
	console.log(cotacao);
	return (
		<>
			{cotacao.status === 'APROVADA' && <p>Cotação aprovada!</p>}
			<h5>{cotacao.nome}</h5>
			<p>Valor Total: {cotacao.valor}</p>
			<h6>Itens</h6>
			{cotacao.itemValorizadoDTOS.map((item) => (
				<p>
					{item.quantidade} x {item.nome} = {item.valorTotal}
				</p>
			))}
		</>
	);
};
