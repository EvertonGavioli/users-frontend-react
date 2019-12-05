import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

import { updateUser } from "../../../store/modules/users/actions";
import history from '../../../services/history';

import { Container } from './styles';

const schema = Yup.object().shape({
  firstName: Yup.string().min(2).max(20).required(),
  lastName: Yup.string().min(2).max(20).required(),
});

export default function UsersDetails({ location }) {
  const dispatch = useDispatch();
  const user = location.state.user;

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  async function handleSaveClick() {
    const valid = await schema.isValid({ firstName, lastName });

    if (valid) {
      const updatedUser = { ...user, firstName, lastName };

      dispatch(updateUser(updatedUser));

      history.push('/');
    } else {
      alert('Ops! Invalid Name.')
    }
  }

  function handleCancelClick() {
    if (user.firstName !== firstName || user.lastName !== lastName) {
      if (window.confirm("Really want to leave without saving?")) {
        history.push('/');
      }
    } else {
      history.push('/');
    }
  }

  return (
    <Container>
      <div className="user-name">
        <span>First Name:</span>
        <input
          type="text"
          maxLength={30}
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="user-name">
        <span>Last Name:</span>
        <input
          type="text"
          maxLength={30}
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className='actions-buttons'>
        <button type='button' onClick={() => handleSaveClick()}>Save</button>
        <button type='button' onClick={() => handleCancelClick()}>Cancel</button>
      </div>
    </Container>
  );
}
