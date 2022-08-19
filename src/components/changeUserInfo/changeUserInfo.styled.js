import styled from "styled-components";

export const ChangeInfoContainer = styled.div`
  width: 800px;
  border: solid 2px #2a5ca6;
  border-radius: 20px;
  font-size: 18px;
  height: fit-content;
  padding: 30px;
  margin-top: 30px;
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

  .button {
    display: flex;
    justify-content: center;
  }

  .formCampo {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;

    label {
		font-size: 12px;
		color: gray;
		text-transform: uppercase;
		margin-bottom: 4px;
	  }

    input,
    select {
      width: 260px;
      height: 24px;
      background-color: transparent;
      border-radius: 5px;
      border: 1px solid #6ea3bb;
      padding: 0 4px;
      margin-bottom: 2px;

      ::placeholder {
        color: #a3a2a2;
      }
    }
  }

  .imgPerfil {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    label {
		font-size: 12px;
		color: gray;
		text-transform: uppercase;
		margin-bottom: 4px;
	  }
  }
`