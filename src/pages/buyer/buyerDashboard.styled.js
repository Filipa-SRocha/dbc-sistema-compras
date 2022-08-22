import styled from "styled-components";
import { primaryColor } from '../../consts';

export const Container = styled.div`
  display: flex;
`

export const DashboardContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow: auto;

  h2 {
		width: 100%;
		margin-top: 40px;
		text-align: center;
		font-size: 32px;
		color: ${primaryColor};
	}
`