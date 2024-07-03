import React from "react";

// 👇️ For client createRoot or hydrateRoot
import * as ReactDOMClient from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();