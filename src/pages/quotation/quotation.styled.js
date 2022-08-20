import styled from 'styled-components';
import { secondaryLight } from '../../consts';

export const QuotationsContainer = styled.section`
	margin-top: 40px;
	display: flex;
	justify-content: center;
	gap: 20px;
	flex-wrap: wrap;
`;

export const QuotationContainer = styled.div`
	background-color: ${secondaryLight};
	padding: 10px;
	width: 400px;
`;
