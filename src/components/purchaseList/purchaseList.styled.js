import styled from "styled-components";

export const PurchaseContainer = styled.div`
  background-color: white;
  border: 1px solid #DFE0EB;
  margin: 20px;
  border-radius: 10px;
`

export const PurchaseLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  justify-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #DFE0EB;

`

export const PurchaseLabelItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
`

export const PurchaseComponent = styled.div`
  background-color: white;
  border: 1px solid #DFE0EB;
`

export const PurchaseItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid #DFE0EB;
  padding: 15px 0;
  :hover {
    background: #e5e5e5;
    cursor: pointer;
  }
`