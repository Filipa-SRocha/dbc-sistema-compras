import styled from 'styled-components';

export const PurchaseContainer = styled.div`
	background-color: white;
	border: 1px solid #AFD0BF;
	margin: 20px;
	padding-bottom: 10px;
	border-radius: 10px;
`;

export const PurchaseLabel = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr) 40px;
	width: 100%;
	justify-items: center;
	padding: 15px 0;
`;

export const PurchaseLabelItem = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	font-weight: bold;
`;

export const PurchaseComponent = styled.div`
	background-color: white;
`;

export const PurchaseItem = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr) 40px;
	width: 100%;
	justify-items: center;
	align-items: center;
	border-top: 1px solid #AFD0BF;
	padding: 15px 0;
	:hover {
		background: #AFD0BF;
		cursor: pointer;
	}
`;
