import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // React 18+ rendering method
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root")); // Create the React root
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
