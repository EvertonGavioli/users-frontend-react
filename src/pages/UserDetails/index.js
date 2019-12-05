import React from 'react';

import Details from '../../components/User/Details';

import { Container } from './styles';

export default function UsersDetails({ location }) {
  return (
    <Container>
      <Details location={location} />
    </Container>
  );
}
