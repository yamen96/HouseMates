export const getEmail = (state) => state.auth.email;
export const getId = (state) => state.auth.uid;

//returns true if the given email is the same as the authenticated email
export const isCurrentUser = (email) => (state) => email === state.auth.email;
