import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 30px 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 2fr);
  border: 1px solid #000;  
  background: #999;

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
      padding: 3px 20px;
      border-left: 1px solid #000;
    }

    .user-actions {
      text-align: center;
      border-left: 1px solid #000;     
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
          font-size: 16px;
        }
      }

      .user-checkbox {
        margin: 5px;
      }

      .user-actions {
        border:none;
        
        .user-actions-span {
          text-decoration: underline;

          &:hover {
            cursor: pointer;
          }
        }   
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