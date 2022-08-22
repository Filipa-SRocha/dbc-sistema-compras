import styled from 'styled-components';
import { secondaryLight } from '../../consts';

export const QuotationsContainer = styled.section`
	margin-top: 10px;
	display: flex;
	justify-content: center;
	gap: 20px;
	flex-wrap: wrap;

	h5 {
		text-align: center;
	}
`;

export const QuotationContainer = styled.div`
	background-color: ${secondaryLight};
	padding: 10px;
	width: 400px;
	border-radius: 10px;

	.title {
		p {
			text-transform: uppercase;
		}
		text-align: center;
	}

	.nomeEQtd {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
		align-items: center;

		p, strong {
			text-align: center;
		}

		strong {
			margin: 10px 0;
		}
	}
`;

export const NovaCotacao = styled.div`
	display: flex;
	gap: 30px;
	flex-direction: column;
	align-items: center;

`