import styled from 'styled-components';

export const FormStyle = styled.div`
	
  display: flex;
  flex-direction: column;
  justify-content: center;

  & label {
		font-size: 12px;
		color: gray;
		text-transform: uppercase;
		margin-bottom: 4px;
	}

	& input,
	& select {
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

  .labelEItemCotacao {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
  }

  .labelEItem {
    margin-top: 10px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
  }

  .button {
    width: 400px;
    display: flex;
    margin-top: 10px;
    justify-content: center;
  }

  
`;