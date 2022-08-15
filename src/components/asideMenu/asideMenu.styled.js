import styled from "styled-components";

export const AsideMenuComponent = styled.aside`
  height: 100vh;
  padding: 30px 20px;
  background: linear-gradient(178deg, #2a5ca6 10%, #77b256 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .logo {
    font-weight: bold;
    color: white;
    font-size: 28px;
    cursor: pointer;
  }

  .navItem { 
    font-size: 40px;
    color: white;
    cursor: pointer;
  }
`

// export const LogoLink = styled.link`
//   font-weight: bold;
//   font-size: 26px;
//   color: white;
//   cursor: pointer;
// `