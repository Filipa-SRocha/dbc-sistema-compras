import styled from 'styled-components';
import { primaryColor } from '../../consts';

export const DetailsContainer = styled.section`
	/* background-color: red; */
	width: 100%;
	padding: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h4 {
		color: gray;
		font-size: 22px;
		margin-bottom: 20px;
	}

	p,
	label {
		margin-left: 10px;
		margin-bottom: 10px;
	}
`;

export const InfoContainer = styled.div`
	width: 600px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 20px;
	border: solid 2px gray;
	> p {
		padding-left: 10px;
		color: gray;
	}
`;

export const ItemsContainer = styled.div`
	
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	max-width: 800px;
	flex-wrap: wrap;

	.itensListados {
		display: flex;
		gap: 10px;
	}

	.itemListado {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
		
		p, strong {
			justify-self: center;
		}
	}
	
	.item {
		padding: 20px;
		border: solid 1px gray;
		border-radius: 20px;
	}
`;

export const FormContainer = styled.div`
	width: 600px;
	/* background-color: red; */
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;

	div.itens {
		margin-bottom: 10px;
		> input {
			margin-left: 10px;
			width: 100px;
		}
	}
`;

export const CotacoesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;

	h5 {
		font-size: 14px;
		text-transform: uppercase;
		margin-bottom: 6px;
	}
	p {
		text-transform: capitalize;
	}
`;
