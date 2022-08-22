import { PurchaseContainer, PurchaseComponent } from './purchaseList.styled';
import { ListHeader, ListItem } from './listComponents';
import { connect } from 'react-redux';

const PurchaseList = ({ purchasesList, cargos, dispatch }) => {
	// console.log(purchasesList);
	return (
		<PurchaseContainer>
			<ListHeader />

			<PurchaseComponent>
				{purchasesList.map((purchase) => {
					return (
						<ListItem
							key={purchase.idCompra}
							purchase={purchase}
							dispatch={dispatch}
							cargos={cargos}
						/>
					);
				})}
			</PurchaseComponent>
		</PurchaseContainer>
	);
};

const mapStateToProps = (state) => ({
	cargos: state.userReducer.user.cargos,
});

export default connect(mapStateToProps)(PurchaseList);
