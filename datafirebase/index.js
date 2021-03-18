require("./fire-config");
const firebase = require("firebase");
// const data = require("./Products");

// firebase
//   .firestore()
//   .collection("products")
//   .add({

//   })
//   .then((res) => console.log("data send"))
//   .catch((err) => console.log("error", err));

// for (let i = 0; i < data.length; i++) {
//   const element = data[i];
//console.log(element);
//console.log(i);
//   firebase
//     .firestore()
//     .collection("products")
//     .add({
//       element,
//     })
//     .then(() => console.log("data send", i))
//     .catch((err) => console.log("error", err));
// }
// Aachp9pV57urHn6M9vdu

// var userdataall = [];
// firebase
//   .firestore()
//   .collection("userdata")
//   .get()
//   .then((res) => {
//     res.forEach((doc) => {
//       var orderObj = doc.data();
//       userdataall.push(orderObj.email);
//       if ("sharozkhan802@livani.com" === orderObj.email) {
//         break;
//         console.log("true");
//       } else {
//         console.log("false");
//       }
//       // console.log(userdataall);
//     });
//   })
//   .catch((e) => console.log(e));

// //console.log(userdataall);

// firebase
//   .firestore()
//   .collection("userdata")
//   .where("sharozkhan802@livani.com", "==", true)
//   .get()
//   .then((res) => {
//     res.forEach((doc) => {
//       var orderObj = doc.data();
//       console.log(orderObj);
//     });
//   })
//   .catch((e) => console.log("Error:", e));

// let db = firebase.firestore();

// db.collection("userdata")
//   .where("sharozkhan802@livani.com", "==", false)
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });
// console.log("helloworld");
let data = [];
var email = "sharozkhan802@livani.com";
firebase
  .firestore()
  .collection("userdata")
  .get()
  .then((res) => {
    res.forEach((doc) => {
      doc.data();
      // if (orderObj.email == "sharozkhan802@livani.com") {
      //   console.log("this email not use");
      // } else {
      //   console.log("this email  use");
      // }
      let orderObj = doc.data();
      //console.log(orderObj);
      data.push(orderObj);
      // if (orderObj.email == email) {
      //   console.log("this user is use the email");
      // } else {
      //   console.log("this user is not use the email");
      // }
    });
    const found = data.filter((e) => e.email == "sharozkhan@livani.com");
    if (found.length === 0) {
      console.log("use");
      console.log(found);
    } else {
      console.log("not");
    }
  })
  .catch((e) => console.log("Error:", e));

// // let db = firebase
// //   .firestore()
// //   .collection("userdata")
// //   .where("email", "==", "sharozkhan802@livani.com");
// // console.log(db.get());

//let array = [{ name: "raees" }, { Name: "hassan" }, { Name: "sharoz" }];
// for (let i = 0; i < array.length; i++) {
//   if ("hassan" == array[i]) {
//     return console.log("found");
//     break;
//   } else {
//     return console.log("nor found");
//   }
// }

// const found = array.filter((e) => {
//   if (e.Name == "sharoz") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(found);
