import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt41SCijLwhkPomzCrXjAHGb-wyEiEwOo",
  authDomain: "blogapp-b2325.firebaseapp.com",
  databaseURL: "https://blogapp-b2325.firebaseio.com",
  projectId: "blogapp-b2325",
  storageBucket: "blogapp-b2325.appspot.com",
  messagingSenderId: "151054141565",
  appId: "1:151054141565:web:36a24bb889b256cc9d8914",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;
export default fire;
