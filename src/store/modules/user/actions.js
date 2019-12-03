export function removeUser(id) {
  return {
    type: "@user/REMOVE",
    id
  };
}

export function updateUserRequest(data) {
  return {
    type: "@user/UPDATE_USER_REQUEST",
    payload: { data }
  };
}

export function updateUserSuccess(data) {
  return {
    type: "@cart/UPDATE_USER_SUCCESS",
    payload: { data }
  };
}

export function updateUserFailure() {
  return {
    type: "@cart/UPDATE_USER_FAILURE"
  };
}
