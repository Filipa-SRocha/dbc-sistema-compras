import styled from 'styled-components';
import { primaryColor, primaryDark } from '../../consts';

export const Container = styled.section`
	width: 100%;
	padding: 40px;
	display: grid;
	grid-template-columns: 2fr 2fr 2fr;
	grid-template-rows: 1fr 1fr;

	justify-items: left;
	align-content: left;
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

export const ItemsContainer = styled.div`
	> h4 {
		color: gray;
		font-size: 22px;
		margin-bottom: 20px;
	}

	> p {
		margin-left: 10px;
		margin-bottom: 10px;
		font-size: 18px;
	}
`;

export const FormContainer = styled.div`
	background-color: yellow;
`;

export const CotacoesContainer = styled.div`
	background-color: green;
`;
