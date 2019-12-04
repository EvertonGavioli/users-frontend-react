import React from 'react';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <span>Filter by name</span>
          <input type="text" />
        </div>
        <button type='button'>Delete selected</button>
        <button type='button'>Download</button>
      </Content>
    </Container>
  );
}
