import { PurchaseContainer, PurchaseComponent } from './purchaseList.styled';
import { ListHeader, ListItem } from './listComponents';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllPurchases } from '../../store/actions/purchaseActions';

const PurchaseList = ({ purchasesList, dispatch }) => {
	useEffect(() => {
		getAllPurchases(dispatch);
	}, []);

	return (
		<PurchaseContainer>
			<ListHeader />
			<PurchaseComponent>
				{purchasesList.map((purchase) => (
					<ListItem purchase={purchase} />
				))}
			</PurchaseComponent>
		</PurchaseContainer>
	);
};

const mapStateToProps = (state) => ({
	purchasesList: state.purchaseReducer.purchasesList,
});

export default connect(mapStateToProps)(PurchaseList);
