import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../scss/styles.scss";


var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);