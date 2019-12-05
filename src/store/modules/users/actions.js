export function removeUser(id) {
  return {
    type: "@user/REMOVE",
    id
  };
}

export function updateUser(user) {
  return {
    type: "@user/UPDATE_USER_REQUEST",
    payload: { user }
  };
}

export function selectedUser(id, selected) {
  return {
    type: "@user/SELECT_USER_REQUEST",
    id,
    selected
  };
}

export function selectedAll(selected) {
  return {
    type: "@user/SELECT_ALL_USERS_REQUEST",
    selected
  };
}