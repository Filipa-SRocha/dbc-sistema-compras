import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllQuotations } from '../../store/actions/quotationAction';
import { QuotationContainer, QuotationsContainer } from './quotation.styled';

const QuotationList = ({ quotationsList, isLoading, dispatch }) => {
	useEffect(() => {
		getAllQuotations(dispatch);
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
	quotationsList: state.quotationReducer.quotationsList,
	isLoading: state.quotationReducer.isLoading,
});

export default connect(mapStateToProps)(QuotationList);
