import styled from "styled-components";

export const HeaderComponent = styled.header`
  color: white;
  text-align: right;
  color: black;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 20px 30px 0 0;
  
  span {
    font-size: 20px;
  }

  .profilePicture {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;

    :hover {
      cursor: pointer;
    }
  }

`