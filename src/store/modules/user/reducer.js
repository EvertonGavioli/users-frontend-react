import produce from "immer";

import users from '../../../services/users';
const INITIAL_STATE = users;

export default function user(state = INITIAL_STATE, action) {
  return state;
}
