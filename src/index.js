import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { history } from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { auth } from "./firebase";
import reducer from "./Reducers/";
import { setUser, clearUser } from "./Actions/authActions";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

auth.onAuthStateChanged(async (user) => {
  if (user) {
    // User is signed in.
    store.dispatch(setUser(user.email, user.uid));
    const path = history.location.pathname;
    if (
      path === "/signin" ||
      path === "/signup" ||
      path === "/passwordReset" ||
      path === "/"
    )
      history.push("/dashboard");
  } else {
    // User is signed out.
    store.dispatch(clearUser());
    history.push("/signin");
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
