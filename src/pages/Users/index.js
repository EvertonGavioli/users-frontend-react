import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

// import api from '../../services/api';

import Header from '../../components/User/Header';
import List from '../../components/User/List';

import { Container } from './styles';

export default function Users() {
  const listUsers = useSelector(state => state.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(listUsers);
  }, [listUsers])

  return (
    <Container>
      <Header />
      <List data={users} />
    </Container>
  );
}
