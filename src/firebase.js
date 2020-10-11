import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf4ewP1PpT2_7zxu-IHWQrZj3Cs53Klk0",
  authDomain: "housemates-5ad62.firebaseapp.com",
  databaseURL: "https://housemates-5ad62.firebaseio.com",
  projectId: "housemates-5ad62",
  storageBucket: "housemates-5ad62.appspot.com",
  messagingSenderId: "442658245192",
  appId: "1:442658245192:web:45d55cdc30e50a8fa1a67d",
  measurementId: "G-2VVPJY4Z2D",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
