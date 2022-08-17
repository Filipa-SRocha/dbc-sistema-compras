import styled from 'styled-components';
import { primaryColor, primaryDark, secondaryColor } from '../../consts';

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

export const SButton = styled.button`
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${secondaryColor};
	color: white;
	border-radius: 10px;
	border: 2px solid ${secondaryColor};
	cursor: pointer;
	overflow: hidden;
	& svg {
		font-size: 20px;
		font-weight: 500;
	}

	:hover {
	}
`;

export const IButton = styled.button`
	width: 28px;
	height: 28px;
	color: gray;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	font-size: 16px;

	:hover {
		background-color: #f0f0f0;
	}
`;
