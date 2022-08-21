import styled from "styled-components";
import { primaryColor, primaryDark, secondaryColor } from '../../consts';

export const AdminPageTitle = styled.h1`
  color:#1969B2;
  text-align: center;
	margin-top: 40px;
  margin-bottom: 20px;
	text-align: center;
	font-size: 32px;
`

export const AdminHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const AddUserButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
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
`