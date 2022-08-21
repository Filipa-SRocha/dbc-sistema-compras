import styled from "styled-components";
import { primaryColor, primaryDark, secondaryColor } from '../../consts';

export const UserRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .goBackButton {
    width: 800px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
  }
`

export const UserRoleInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .profilePicture {
    width: 200px;
    height: 200px;
    border-radius: 100%;
  }

  .userProfile { 
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    gap: 20px;
    height: fit-content;
    padding: 30px;
    margin-top: 20px;
    border: solid 2px #2a5ca6;
    border-radius: 20px;
  }

  .profileIcon {
    font-size: 60px;
  }

  .userInfo {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .userEdit {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }

  .nomeEEmail {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .userNome, .userEmail, .userRole {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`

export const UserLabelAndInfo = styled.div`
  display: flex;
  gap: 6px;
`

export const RoleButton = styled.div`
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

export const RoleEdit = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px #2a5ca6;
  border-radius: 20px;
  padding: 30px 0;
  margin-top: 10px;

  .editRoleForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .editRoleForm select {
    width: 200px;
    height: 30px;
    text-align: center;
    outline: none;
    background-color: white;
    border: solid 1px #2a5ca6;
    border-radius: 10px;

    :hover {
      cursor: pointer;
    }
  }

  .editRoleForm button {
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
  }
`

export const BackButton = styled.button`
  align-self: flex-start;
  background: transparent;
  border: none;
  background: transparent;
  border-radius: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 0.3s;

  :hover {
    /* background: #2a5ca6;
    border: none;
    color: white; */
    cursor: pointer;
  }
`