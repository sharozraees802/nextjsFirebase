import React, { PureComponent } from "react";

class OfflineSupport extends PureComponent {
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(`sw.js`)
        .then((r) => console.log("service worker registered."))
        .catch((err) => console.log(err));
    }
  }

  render() {
    return null;
  }
}

export default OfflineSupport;
