import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/board";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.getElementById("root")
);
