import { SET_USER, CLEAR_USER } from "../Actions/authActions";

const initialState = {
  email: "",
  uid: "",
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        email: action.email,
        uid: action.uid,
      };
    }
    case CLEAR_USER: {
      return {};
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
