import styled from "styled-components";

export const ChangeInfoContainer = styled.div`
  width: 800px;
  border: solid 2px #2a5ca6;
  border-radius: 20px;
  font-size: 22px;
  height: fit-content;
  padding: 30px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
  }

  .form {
    display: flex;
    font-size: 16px;
  }

  .formCampo {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
  }

  .imgPerfil {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }
`