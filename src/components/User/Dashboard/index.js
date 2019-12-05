import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";

import { removeUser, selectedUser, selectedAll } from "../../../store/modules/users/actions";
import history from '../../../services/history';

import { Container, Content, Filter, Header, ListUsers } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const listUsers = useSelector(state => state.users);

  const [users, setUsers] = useState(listUsers);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const results = listUsers.filter(user =>
      (user.firstName + " " + user.lastName).toLowerCase().includes(searchName));

    setUsers(results);
  }, [searchName, listUsers]);

  const countSelected = useMemo(() => {
    return users.filter(user => user.selected === true).length;
  }, [users]);

  function handleShowClick(user) {
    history.push("/user", { user });
  }

  function handleDeleteUser({ id }) {
    dispatch(removeUser(id))
  }

  function handleSelectUser(id, selected) {
    dispatch(selectedUser(id, selected));
  }

  function handleSelectAll(selected) {
    dispatch(selectedAll(selected));
  }

  function handleDeleteClick() {
    users.forEach(user => {
      if (user.selected) {
        dispatch(removeUser(user.id));
      }
    });
  }

  function handleDownloadClick() {
    const selectedUsers = users.filter(user => user.selected);
    const selectedUsersToSave = JSON.stringify(selectedUsers);

    var blob = new Blob([selectedUsersToSave], { type: "application/json;charset=utf-8" });
    saveAs(blob, "selected_users.json");
  }

  function handleChangeFilter(event) {
    setSearchName(event.target.value.toLowerCase());
  }

  return (
    <Container>
      <Content>
        <Filter>
          <div>
            <span>Filter by name</span>
            <input
              type="text"
              maxLength={25}
              value={searchName}
              onChange={handleChangeFilter}
            />
          </div>
          <button
            type='button'
            disabled={!countSelected}
            onClick={() => handleDeleteClick()}>
            Delete selected
          </button>
          <button
            type='button'
            disabled={!countSelected}
            onClick={() => handleDownloadClick()}>
            Download
          </button>
        </Filter>

        <Header>
          <div>
            <input
              type="checkbox"
              onChange={e => handleSelectAll(e.target.checked)}
            />
          </div>
          <span>Name</span>
          <span>Actions</span>
        </Header>

        <ListUsers>
          {users.map(user => (
            <li key={user.id}>
              <div className='user-checkbox'>
                <input
                  type="checkbox"
                  checked={!!user.selected}
                  onChange={e => handleSelectUser(user.id, e.target.checked)}
                />
              </div>
              <div className='user-profile'>
                <span>{user.firstName + " " + user.lastName}</span>
                <span id='user-age'>Age: {user.age}</span>
                <span id='user-description'>{user.description}</span>
              </div>
              <div className='user-actions'>
                <span className='user-actions-span' onClick={() => handleShowClick(user)}>Show</span>
                <span>|</span>
                <span className='user-actions-span' onClick={() => handleDeleteUser(user)}>Delete</span>
              </div>
            </li>
          ))}
        </ListUsers>
        <span id="count-selected">{countSelected} items selected</span>
      </Content>
    </Container>
  );
}
