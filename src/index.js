import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import India from "./Components/India/India";
import App from "./Components/App/App";
import Destructure from "./Components/Destructing/Destructuring";

const root = ReactDOM.createRoot(document.getElementById("blank-container"));
root.render(
  <React.StrictMode>
    <App />
    {/* <India title="India" subtitle="Best Nation" /> */}
    {/* <Destructure title="welcome to Destruc" /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
