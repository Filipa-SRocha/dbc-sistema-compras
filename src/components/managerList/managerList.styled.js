import styled from 'styled-components';
import { primaryColor } from '../../consts';

export const ManagerListContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const PurchaseContainer = styled.div`
	margin-bottom: 30px;
	margin: 20px;
	padding: 10px;
	border: 1px solid ${primaryColor};
`;

export const QuotationsContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	gap: 30px;
`;
