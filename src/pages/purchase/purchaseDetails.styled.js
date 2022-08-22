import styled from 'styled-components';
import { primaryColor } from '../../consts';

export const Container = styled.section`
	/* background-color: red; */
	width: 100%;
	padding: 40px;
	display: grid;
	grid-template-columns: 2fr 2fr;
	grid-template-rows: auto;
	grid-template-areas:
		'title items'
		'quote quote';

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
	grid-area: title;
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

export const ItemsContainer = styled.div`
	grid-area: items;
`;

export const FormContainer = styled.div`
	width: 100%;
	background-color: red;

	div.itens {
		margin-bottom: 10px;
		> input {
			margin-left: 10px;
			width: 100px;
		}
	}
`;

export const CotacoesContainer = styled.div`
	grid-area: quote;
	width: 100%;
	h5 {
		font-size: 14px;
		text-transform: uppercase;
		margin-bottom: 6px;
	}
	p {
		text-transform: capitalize;
	}
`;
