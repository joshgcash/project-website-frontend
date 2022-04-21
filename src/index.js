import React from "react";
import ReactDOM from "react-dom";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import { App } from "./App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
