import styled from 'styled-components';

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
		margin-bottom: 28px;
	}

	& a {
		position: relative;
		bottom: 0;
		color: black;
	}

	& a:hover {
		text-decoration: underline;
	}
`;

export const LogoContainer = styled.div`
	& img {
		width: 80px;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	align-items: center;
	height: 80%;

	& div:first-child {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 68px;
		margin-bottom: 10px;
	}

	div.StrongPassword {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		height: 18px;
		& svg {
			margin-left: 10px;
			margin-bottom: 0;
		}
		& label {
			margin-bottom: 0;
		}
	}

	& label {
		font-size: 14px;
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
	}

	& div > div > button {
		width: 20px;
		background-color: transparent;
		border: none;
		position: relative;
		top: -20px;
		right: -230px;
		color: gray;
	}
`;

export const Errors = styled.div`
	color: #961515;
	font-size: 10px;
`;
