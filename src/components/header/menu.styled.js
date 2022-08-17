import styled from "styled-components";

export const MenuItemContainer = styled.div`
  width: 200px;
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid 2px #AFD0BF;
  margin: 10px 0;
  padding-bottom: 3px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  .menuItem {
    width: 100%;
    display: flex;
    /* justify-content: flex-end; */
    padding: 10px;
    font-size: 20px;
    display: flex;
    gap: 10px;
    color: black;
    box-sizing: border-box;

    :hover {
      background-color: #AFD0BF;
      width: 100%;
      box-sizing: border-box;
    }
  }
`