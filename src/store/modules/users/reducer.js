import produce from "immer";

import usersList from '../../../services/users';

const INITIAL_STATE = usersList;

export default function users(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/UPDATE_USER_REQUEST': {
        const userIndex = draft.findIndex(obj => obj.id === action.payload.user.id);

        draft[userIndex].firstName = action.payload.user.firstName;
        draft[userIndex].lastName = action.payload.user.lastName;
        break;
      }
      case "@user/REMOVE": {
        const userIndex = draft.findIndex(obj => obj.id === action.id);
        draft.splice(userIndex, 1);
        break;
      }
      default:
    }
  });
}
