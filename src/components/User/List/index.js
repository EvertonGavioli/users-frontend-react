import React from 'react';

import history from '../../../services/history';

import { Container, Content, Header, ListUsers } from './styles';

export default function List({ data }) {
  return (
    <Container>
      {console.log(data)}
      <Content>
        <Header>
          <div>
            <input type="checkbox" />
          </div>
          <span>Name</span>
          <span>Actions</span>
        </Header>
        <ListUsers>
          {data.map(user => (
            <li key={user.id}>
              <div className='user-checkbox'>
                <input type="checkbox" />
              </div>
              <div className='user-profile'>
                <span>{user.firstName + " " + user.lastName}</span>
                <span id='user-age'>Age: {user.age}</span>
                <span id='user-description'>{user.description}</span>
              </div>
              <div className='user-actions'>
                <span className='user-actions-span' onClick={() => {
                  history.push("/user", { user });
                }}>Show</span>
                <span> | </span>
                <span className='user-actions-span'>Delete</span>
              </div>
            </li>
          ))}
        </ListUsers>
      </Content>
    </Container>
  );
}
