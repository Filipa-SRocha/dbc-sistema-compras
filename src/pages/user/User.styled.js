import styled from 'styled-components'

export const UserGlobalContainer = styled.div`
  display: flex;
  width: 100%;

  .contentContainer {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`

export const UserContainer = styled.div`
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
    height: fit-content;
    padding: 30px;
    margin-top: 60px;
    /* background-color: blue; */
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

  .userNome, .userEmail {
    display: flex;
    gap: 8px;
    align-items: center;
  }

`

export const Button = styled.button`
  background: transparent;
  border: solid 2px #2a5ca6;
  width: 200px;
  height: 40px;
  justify-content: center;
  border-radius: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 0.3s;

  :hover {
    background: #2a5ca6;
    cursor: pointer;
    color: white;
  }
`