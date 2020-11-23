import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If running in isolation (dev environment), mount on an ID present in index.html
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// If running through container, we need to export mount
export { mount };
