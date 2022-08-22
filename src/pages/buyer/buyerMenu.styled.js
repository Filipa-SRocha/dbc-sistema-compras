import styled from "styled-components";
import { primaryColor, primaryDark, secondaryColor } from '../../consts';

export const CotarButton = styled.button`
	width: 50px;
	height: 30px;
  font-size: 22px;
	color: gray;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 10px;
	cursor: pointer;
`

export const AprovarButton = styled.button`
  width: 50px;
	height: 30px;
  font-size: 22px;
	color: green;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 10px;
	cursor: pointer;

	:disabled {
		color: red
	}
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  margin-right: 10px;
`