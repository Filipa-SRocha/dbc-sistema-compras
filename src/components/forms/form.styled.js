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

export const FormStyle = styled.div`
	& label {
		font-size: 12px;
		color: gray;
		text-transform: uppercase;
		margin-bottom: 4px;
	}

	& input,
	& select {
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

export const PopUpFormContainer = styled(FormStyle)`
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

	div.StrongPassword {
		display: flex;
		height: 76px;
		flex-direction: column;
		justify-content: flex-start;
		& > div {
			height: 50px;
		}

		& svg {
			margin-right: 6px;
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
			font-size: 12px;
		}

		& img {
			height: 32px;
			border-radius: 100%;
		}
	}
`;

export const RegularFormContainer = styled(FormStyle)`
	margin-left: 80px;
	display: flex;
	flex-direction: column;
	& h3 {
		color: ${secondaryColor};
		margin-bottom: 12px;
	}
	& h5 {
		color: ${secondaryColor};
	}

	& > * > div:nth-of-type(1) {
		display: flex;
		gap: 40px;
		height: 60px;

		& > div {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			gap: 2px;
		}
	}

	& > * > div:nth-of-type(2) {
		display: flex;
		gap: 16px;
		flex-direction: column;
		margin-bottom: 40px;
	}

	& div.item-container {
		display: flex;
		align-items: center;
		gap: 40px;
		& > div {
			display: flex;
			gap: 12px;
			align-items: center;
		}
	}

	& > * > button {
		justify-self: center;
	}
`;

export const Errors = styled.div`
	color: ${errorColor};
	font-size: 10px;
`;
