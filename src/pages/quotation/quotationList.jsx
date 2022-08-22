import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPurchaseQuotations } from '../../store/actions/quotationAction';
import { QuotationContainer, QuotationsContainer } from './quotation.styled';

const QuotationList = ({ cotacoes, idCompra, quotationsList, isLoading, dispatch }) => {
	
	// useEffect(() => {
	// 	getPurchaseQuotations(idCompra, dispatch);
	// }, []);

	console.log(cotacoes)

	return (
		<QuotationsContainer>
			{cotacoes.map((cotacao) => (
				<QuotationContainer key={cotacao.idCotacao}>
					<h5>{cotacao.nome}</h5>
						{cotacao.itemValorizadoDTOS.map((item) => (
							<p key={item.idItem}>
								{}
								{item.nome} {item.valorUnitario}
							</p>
						))}
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
