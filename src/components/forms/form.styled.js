import styled from 'styled-components';
import {
	primaryColor,
	secondaryColor,
	primaryLight,
	primaryDark,
	errorColor,
} from '../../consts';

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(178deg, #2a5ca6 10%, #77b256 90%);
`;

export const Container = styled.div`
	width: 400px;
	height: ${(props) => (props.height ? props.height : '600px')};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 32px 14px;
	border-radius: 10px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

	& h2 {
		font-size: 20px;
		font-weight: 500;
	}

	& a {
		position: relative;
		bottom: 0;
		color: ${primaryLight};
		text-decoration: underline;
	}

	& a:hover {
		color: ${primaryDark};
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	color: ${secondaryColor};

	& img {
		width: 80px;
	}
	& h1 {
		font-size: 20px;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	align-items: center;
	margin-top: 28px;
	height: 80%;

	& > * > div {
		display: flex;
		flex-direction: column;
		height: 64px;
	}

	& > * > div:nth-child(3) {
		height: 76px;
	}

	div.StrongPassword {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		& > div {
			height: 50px;
		}

		& svg {
			margin-right: 6px;
		}
	}

	& label {
		font-size: 12px;
		color: gray;
		text-transform: uppercase;
		margin-bottom: 4px;
	}

	& input {
		width: 260px;
		height: 24px;
		background-color: transparent;
		border-radius: 5px;
		border: 1px solid #6ea3bb;
		padding: 0 4px;
		margin-bottom: 2px;

		::placeholder {
			color: #a3a2a2;
		}
	}

	& > * > div > div > button {
		position: relative;
		right: 30px;
	}

	& > * > button {
		margin-top: 20px;
	}

	& div.signup-profile-img {
		flex-direction: column;
		height: 40px;
		& input {
			border: none;
			width: 220px;
			padding: 0;
			width: 90%;
		}

		& img {
			height: 32px;
			border-radius: 100%;
		}
	}

`;

export const Errors = styled.div`
	color: ${errorColor};
	font-size: 10px;
`;
