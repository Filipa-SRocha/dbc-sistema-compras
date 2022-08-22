import styled from 'styled-components';
import { primaryColor } from '../../consts';

export const Container = styled.div`
	display: flex;
`;

export const DashboardContainer = styled.div`
	width: 100%;
	height: 100vh;
	overflow: scroll;
	& h2 {
		width: 100%;
		margin-top: 40px;
		text-align: center;
		font-size: 32px;
		color: ${primaryColor};
	}
`;

export const PageContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`;
