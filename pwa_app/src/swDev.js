const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  navigator.serviceWorker
    .register(swUrl)
    .then((r) => console.log("response", r))
    .catch((e) => console.log("error", e));
};

export default swDev;
