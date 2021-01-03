const swDev = () => {
  const urlBase64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  const determineAppServerKey = () => {
    var vapidPublicKey =
      "BE6mp5neVDqposFQ5bziYoC196uV7IOWQXMufNE1SeWVUeFXPkkuxFNKR7arCgDy8Ao-ZRtikYWwbVdOK7euSik";
    return urlBase64ToUint8Array(vapidPublicKey);
  };

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  navigator.serviceWorker
    .register(swUrl)
    .then((r) => {
      console.log("response", r);
      return r.pushManager.getSubscription().then(() => {
        return r.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: determineAppServerKey(),
        });
      });
    })
    .catch((e) => console.log("error", e));
};

export default swDev;
