import { PurchaseContainer, PurchaseComponent } from './purchaseList.styled';
import { ListHeader, ListItem } from './listComponents';
import { connect } from 'react-redux';

const PurchaseList = ({ purchasesList, isLoading, dispatch }) => {
	return (
		<PurchaseContainer>
			<ListHeader />
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<PurchaseComponent>
					{purchasesList.map((purchase) => (
						<ListItem
							key={purchase.idCompra}
							purchase={purchase}
							dispatch={dispatch}
						/>
					))}
				</PurchaseComponent>
			)}
		</PurchaseContainer>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.purchaseReducer.isLoading,
});

export default connect(mapStateToProps)(PurchaseList);
