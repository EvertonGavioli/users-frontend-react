import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 30px 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  #count-selected {
    margin-top: 10px;
    color: #293462;
  }
`;

export const Filter = styled.div` 
  display: flex;
  flex: 1;
  align-items: flex-end;
  padding: 20px 0px 20px 0px;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 14px;
      color: #293462;
    }

    input {
      padding: 2px;
      min-width: 250px;
      height: 32px;
      border: 1px solid #293462;
      border-radius: 4px;
      background: #fff;
      color: #293462;
      font-size: 16px;
    }
  }

  button {
    padding: 2px;
    min-width: 250px;
    margin-left: 20px;
    height: 32px;
    border: 1px solid #293462;
    border-radius: 4px;
    background: #ccc;
    color: #293462;
    font-size: 16px;

    &:disabled {
      opacity: 0.5;
      cursor: initial;
    }
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

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 2fr);
  border: 1px solid #000;  
  background: #293462;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      flex: 1;
      height: 16px;
    }
  }

  span {
    text-align: center;
    border-left: 1px solid #000;
    padding: 5px 0;
    color: #fff;
    font-size: 16px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ListUsers = styled.ul`
  li {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 2fr);
    list-style: none;

    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;

    .user-checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      
      input {
        flex: 1;
        height: 16px;
      }
    }

    .user-profile {
      display: flex;
      align-items: center;
      flex: 1;

      padding: 5px 20px;
      border-left: 1px solid #000;
    }

    .user-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      border-left: 1px solid #000;

      .user-actions-span {
        text-decoration: underline;
        padding: 0px 10px;

        &:hover {
          cursor: pointer;
        }
      }     
    }
  }

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    li {
      display: flex;
      flex-direction: column;
      border-top: 1px solid #000;
      border-radius: 4px;
      padding: 10px;

      div:nth-child(1) { order: 2; }
      div:nth-child(2) { order: 1; }
      div:nth-child(3) { order: 3; }

      .user-profile {
        display: flex;
        flex-direction: column;

        padding: 0px;        
        border:none;
        
        span {
          margin-bottom: 5px;
        }

        span:first-child {
          font-weight: bold;
          font-size: 20px;
          color: #293462;
        }
      }

      .user-checkbox {
        margin: 5px;
      }

      .user-actions {
        border:none;
      } 
    }
  } 

  @media screen and (min-width: 1024px) {
    #user-age {
      display: none;
    }

    #user-description {
      display: none;
    }
  }  
`;