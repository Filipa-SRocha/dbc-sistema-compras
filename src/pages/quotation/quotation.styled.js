import styled from 'styled-components';
import { secondaryColor, secondaryLight } from '../../consts';

export const QuotationsContainer = styled.section`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
`;

export const QuotationContainer = styled.div`
	background-color: ${secondaryLight};
	padding: 10px;
	width: 200px;
`;
