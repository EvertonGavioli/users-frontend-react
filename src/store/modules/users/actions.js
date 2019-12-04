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
