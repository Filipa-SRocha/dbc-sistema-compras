import styled from "styled-components";
import {
	primaryColor,
	secondaryColor,
	primaryLight,
	primaryDark,
	errorColor,
} from '../../consts';

export const AdminContainer = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
		color: ${primaryColor};
		margin-bottom: 12px;
	}

  .telas {
    margin-top: 20px;
    display: flex;
    gap: 16px;
  }
  .cargo {
    width: 150px;
    height: 100px;
    font-size: 20px;
    background: transparent;
    border: solid 1px gray;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      margin-top: 5px;
    }

    :hover {
      cursor: pointer;
      background-color: #f0f0f0;
    }
  }
`