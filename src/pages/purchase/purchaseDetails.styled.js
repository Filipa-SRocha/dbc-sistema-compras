import styled from 'styled-components';
import { primaryColor } from '../../consts';

export const Container = styled.section`
	width: 100%;
	padding: 40px;
	display: grid;
	grid-template-columns: 2fr 2fr 3fr;
	grid-template-rows: 1fr 1fr;

	justify-items: left;
	align-content: left;

	h4 {
		color: gray;
		font-size: 22px;
		margin-bottom: 20px;
	}

	p,
	label {
		margin-left: 10px;
		margin-bottom: 10px;
		font-size: 18px;
	}
`;

export const InfoContainer = styled.div`
	> h3 {
		font-size: 30px;
		color: ${primaryColor};
		text-align: center;
	}

	> p {
		padding-left: 10px;
		color: gray;
	}
`;

export const ItemsContainer = styled.div``;

export const FormContainer = styled.div`
	width: 100%;

	div.itens {
		margin-bottom: 10px;
		> input {
			margin-left: 10px;
			width: 100px;
		}
	}
`;

export const CotacoesContainer = styled.div`
	background-color: green;
	width: 100%;
`;
