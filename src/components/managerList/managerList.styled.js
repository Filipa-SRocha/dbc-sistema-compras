import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../consts';

export const ManagerListContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

export const PurchaseContainer = styled.div`
	width: 900px;
	margin-bottom: 30px;
	margin: 20px;
	padding: 20px;
	border: 1px solid ${primaryColor};
	> h4 {
		margin-top: 20px;
		color: ${secondaryColor};
	}
`;

export const InfoContainer = styled.div`
	> div {
		display: flex;
		align-items: center;
		gap: 10px;
		> p {
			color: gray;
		}
		h3 {
			font-size: 18px;
			text-transform: uppercase;
			color: ${primaryColor};
		}
	}
	> small {
		font-size: 12px;
		color: gray;
		margin-left: 6px;
	}
	padding-bottom: 20px;
	border-bottom: 1px solid grey;
`;

export const QuotationsContainer = styled.div`
	margin-top: 20px;
	min-width: 200px;
	display: flex;
	/* justify-content: space-between; */
	gap: 30px;

	> div > h5 {
		text-transform: uppercase;
		margin-bottom: 10px;
	}

	> div > p {
		margin: 10px 0;
		font-weight: 600;
	}
`;

export const ListItems = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr 2fr;
	gap: 4px;
	margin-bottom: 4px;
`;

export const ListItemsHeader = styled(ListItems)`
	border-bottom: 1px solid black;
`;
