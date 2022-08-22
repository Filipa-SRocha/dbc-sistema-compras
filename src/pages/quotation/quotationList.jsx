import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPurchaseQuotations } from '../../store/actions/quotationAction';
import { QuotationContainer, QuotationsContainer } from './quotation.styled';

const QuotationList = ({ cotacoes, idCompra, quotationsList, isLoading, dispatch }) => {
	
	// useEffect(() => {
	// 	getPurchaseQuotations(idCompra, dispatch);
	// }, []);

	const anexoPrefixo = 'data:application/pdf;base64,';

	console.log(cotacoes)

	return (
		<QuotationsContainer>
			{cotacoes.map((cotacao) => (
				<QuotationContainer key={cotacao.idCotacao}>
					<div className="title">
						<p><strong>Nome da cotação: </strong>{cotacao.nome}</p>
					</div>
					<div className="nomeEQtd">
						<strong>Item</strong>
						<strong>{`Valor Unitário (R$)`}</strong>
					</div>
						{cotacao.itemValorizadoDTOS.map((item) => (
							<div className='nomeEQtd' key={item.idItem}>
								<p>{item.nome}</p>
								<p>{item.valorUnitario}</p>
							</div>
						))}
				{/* {cotacao.anexo.length > 100 && <a href={anexoPrefixo+cotacao.anexo} download="Anexo.pdf">Anexo da cotação</a>} */}
				</QuotationContainer>
			))}
		</QuotationsContainer>
	);
};

const mapStateToProps = (state) => ({
	idCompra: state.purchaseReducer.purchaseToShow.idCompra,
	quotationsList: state.quotationReducer.quotationsList,
	isLoading: state.quotationReducer.isLoading,
});

export default connect(mapStateToProps)(QuotationList);
