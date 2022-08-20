import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllQuotations } from '../../store/actions/quotationAction';

const QuotationList = ({ quotationsList, isLoading, dispatch }) => {
	useEffect(() => {
		getAllQuotations(dispatch);
	}, []);

	return (
		<div>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<>
					{quotationsList.map((quotation) => (
						<div key={quotation.idCotacao}>
							<p>{quotation.nome}</p>
							{quotation.compraDTO.itens.map((item) => (
								<p>
									{item.nome} {item.valorUnitario}
								</p>
							))}
						</div>
					))}
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	quotationsList: state.quotationReducer.quotationsList,
	isLoading: state.quotationReducer.isLoading,
});

export default connect(mapStateToProps)(QuotationList);
