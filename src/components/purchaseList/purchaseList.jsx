import {
	PurchaseContainer,
	PurchaseComponent,
	PurchaseItem,
} from './purchaseList.styled';
import { ListHeader, ListItem } from './listComponents';

const PurchaseList = () => {
	return (
		<PurchaseContainer>
			<ListHeader />
			<PurchaseComponent>
				<ListItem />
			</PurchaseComponent>
		</PurchaseContainer>
	);
};
export default PurchaseList;
