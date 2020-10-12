require("./fire-config");
const firebase = require("firebase");
const data = require("./Products");

// firebase
//   .firestore()
//   .collection("products")
//   .add({

//   })
//   .then((res) => console.log("data send"))
//   .catch((err) => console.log("error", err));

for (let i = 0; i < data.length; i++) {
  const element = data[i];
  //console.log(element);
  console.log(i);
  // firebase
  //   .firestore()
  //   .collection("products")
  //   .add({
  //     element,
  //   })
  //   .then(() => console.log("data send", i))
  //   .catch((err) => console.log("error", err));
}
