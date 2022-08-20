import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPurchaseQuotations } from '../../store/actions/quotationAction';
import { QuotationContainer, QuotationsContainer } from './quotation.styled';

const QuotationList = ({ idCompra, quotationsList, isLoading, dispatch }) => {
	useEffect(() => {
		getPurchaseQuotations(idCompra, dispatch);
	}, []);

	return (
		<QuotationsContainer>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<>
					{quotationsList.map((quotation) => (
						<QuotationContainer key={quotation.idCotacao}>
							<h5>{quotation.nome}</h5>
							{quotation.compraDTO.itens.map((item) => (
								<p>
									{}
									{item.nome} {item.valorUnitario}
								</p>
							))}
						</QuotationContainer>
					))}
				</>
			)}
		</QuotationsContainer>
	);
};

const mapStateToProps = (state) => ({
	idCompra: state.purchaseReducer.purchaseToShow.idCompra,
	quotationsList: state.quotationReducer.quotationsList,
	isLoading: state.quotationReducer.isLoading,
});

export default connect(mapStateToProps)(QuotationList);
