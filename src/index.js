import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { auth } from "./firebase";
import * as serviceWorker from "./serviceWorker";

auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    console.log(user.email);
    console.log(user.uid);
  } else {
    // User is signed out.
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
