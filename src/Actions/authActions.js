export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export function setUser(email, uid) {
  return {
    type: SET_USER,
    email: email,
    uid: uid,
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}
