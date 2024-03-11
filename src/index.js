import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
//Font awsome
import "./Style/all.css";
import "./Style/all.min.css";

//Style
import "./Style/welcome.css";
import "./Style/nav.css";
import "./Style/game.css";
import "./Style/about.css";
//
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
