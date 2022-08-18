import { PurchaseContainer, PurchaseComponent } from './purchaseList.styled';
import { ListHeader, ListItem } from './listComponents';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllPurchases } from '../../store/actions/purchaseActions';

const PurchaseList = ({ purchasesList, dispatch }) => {
	const updateList = () => {
		getAllPurchases(dispatch);
	};

	useEffect(() => {
		updateList();
	}, []);

	return (
		<PurchaseContainer>
			<ListHeader />
			<PurchaseComponent>
				{purchasesList.map((purchase) => (
					<ListItem
						key={purchase.idCompra}
						purchase={purchase}
						updateList={updateList}
						dispatch={dispatch}
					/>
				))}
			</PurchaseComponent>
		</PurchaseContainer>
	);
};

const mapStateToProps = (state) => ({
	purchasesList: state.purchaseReducer.purchasesList,
});

export default connect(mapStateToProps)(PurchaseList);
