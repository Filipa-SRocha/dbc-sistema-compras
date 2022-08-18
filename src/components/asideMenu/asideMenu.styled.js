import styled from 'styled-components';
import { secondaryColor } from '../../consts';

export const AsideMenuComponent = styled.aside`
	height: 100vh;
	padding: 30px 20px;
	background: linear-gradient(178deg, #2a5ca6 10%, #77b256 90%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 30px;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	.logo {
		font-weight: bold;
		color: white;
		font-size: 28px;
		cursor: pointer;
	}

	& li {
		cursor: none;
		margin-bottom: 20px;
	}

	& li > button {
		width: 60px;
		height: 50px;
		border-radius: 20px;
	}
	& li > button > * {
		font-size: 40px;
		color: white;
		pointer-events: none;
	}

	button:hover {
		cursor: pointer;
	}

	.active {
		height: 50px;
		border-radius: 20px;
		background-color: #1f1f1f45;
	}

	.logoutItem {
		font-size: 40px;
		color: white;
	}

	& button {
		background: none;
		border: none;
	}
`;

// export const LogoLink = styled.link`
//   font-weight: bold;
//   font-size: 26px;
//   color: white;
//   cursor: pointer;
// `
