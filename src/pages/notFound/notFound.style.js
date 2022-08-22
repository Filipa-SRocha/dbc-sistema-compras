import styled from 'styled-components';

export const NotFoundContainer = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(178deg, #2a5ca6 10%, #77b256 90%);

	> h1 {
		color: white;
		font-size: 40px;
	}
	> a {
		margin-top: 20px;
		display: block;
		color: white;
		text-decoration: underline;
	}
`;
