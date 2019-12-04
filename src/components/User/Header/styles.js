import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 30px;
`;

export const Content = styled.div` 
  display: flex;
  align-items: flex-end;
  flex: 1;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: #999;
    }

    input {
      padding: 2px;
      min-width: 180px;
    }
  }

  button {
    min-width: 180px;
    margin-left: 20px;
    padding: 2px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    
    div {
      input {
        min-width: 280px;
      }
    }

    button {
      margin-left: 0;
      margin-top: 10px;
      min-width: 280px;
    }
  }
`;
