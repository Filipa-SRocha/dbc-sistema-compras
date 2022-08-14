import styled from 'styled-components';
import { primaryColor, primaryDark } from '../../consts';

export const Button = styled.button`
	width: 260px;
	height: 32px;
	background-color: ${primaryColor};
	color: white;
	border-radius: 10px;
	border: none;
	font-weight: 500;
	cursor: pointer;

	:hover {
		background-color: ${primaryDark};
	}
`;
