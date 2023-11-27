import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App";
import { robots } from "./robots";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <App robots={robots} />
  </React.StrictMode>
);

reportWebVitals();
