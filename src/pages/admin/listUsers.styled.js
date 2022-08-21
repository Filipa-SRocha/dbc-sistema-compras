import styled from 'styled-components';

export const UsersListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: space-evenly;
  gap: 20px 0;
  padding: 0 30px;
  margin-bottom: 40px;
`;

export const UserComponent = styled.div`
  width: 380px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: solid 1px #AFD0BF;
  border-radius: 10px;
`

export const UserItemLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const RoleButton = styled.button`
	width: 24px;
	height: 24px;
  font-size: 16px;
	color: gray;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 10px;
	cursor: pointer;

	:hover {
		background-color: #f0f0f0;
	}
`;

export const DeleteButton = styled.button`
	width: 24px;
	height: 24px;
  font-size: 16px;
	color: gray;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 10px;
	cursor: pointer;

	:hover {
		background-color: #f0f0f0;
    color: red;
	}
`;

export const RoleButtonsContainer = styled.div`
  display: flex;
  gap: 6px;
`