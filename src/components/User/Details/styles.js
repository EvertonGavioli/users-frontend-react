import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  
  .user-name {
    margin-bottom: 10px;

    span {
      font-size: 16px;      
      font-weight: bold;
      margin-right: 15px;
    }

    input {
      display: flex;
      width: 100%; 
      padding: 2px;
      height: 32px;
      border: 1px solid #293462;
      border-radius: 4px;
      background: #fff;
      color: #293462;
      font-size: 16px;
    }
  }

  .actions-buttons {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    button {
      height: 32px;
      border: 1px solid #293462;
      border-radius: 4px;
      background: #ccc;
      color: #293462;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
`;
