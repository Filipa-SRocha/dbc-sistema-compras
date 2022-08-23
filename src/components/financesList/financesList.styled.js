import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../consts';

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

export const QuotationsFinanceContainer = styled.div`
	display: flex;
	margin-top: 20px;
`

export const InfoContainer = styled.div`
	> div {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	> div > p {
		color: gray;
	}
	h3 {
		font-size: 18px;
		text-transform: uppercase;
		color: ${primaryColor};
	}

	> p {
		margin: 10px 0;
		font-weight: 600;
	}
`;

export const FinancesHeader = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		margin-right: 20px;
		padding: 6px;
	}
`;
