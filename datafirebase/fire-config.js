const firebase = require("firebase");
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA8-_jZ8gG4Y6gZEUhRv0JV-tMciKovILw",
//   authDomain: "ecommerce-website-3bea7.firebaseapp.com",
//   databaseURL: "https://ecommerce-website-3bea7.firebaseio.com",
//   projectId: "ecommerce-website-3bea7",
//   storageBucket: "ecommerce-website-3bea7.appspot.com",
//   messagingSenderId: "262495901620",
//   appId: "1:262495901620:web:3d80ac565637a52e1cc4e1",
// };

// try {
//   firebase.initializeApp(firebaseConfig);
// } catch (error) {
//   if (!/already exists/.test(error.message)) {
//     console.error("Firebase initialization error", error.stack);
//   }
// }

const firebaseConfig = {
  apiKey: "AIzaSyA8-_jZ8gG4Y6gZEUhRv0JV-tMciKovILw",
  authDomain: "ecommerce-website-3bea7.firebaseapp.com",
  databaseURL: "https://ecommerce-website-3bea7.firebaseio.com",
  projectId: "ecommerce-website-3bea7",
  storageBucket: "ecommerce-website-3bea7.appspot.com",
  messagingSenderId: "262495901620",
  appId: "1:262495901620:web:3d80ac565637a52e1cc4e1",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err);
  }
}

// const auth = firebase.auth();
// export { auth, firebase };
