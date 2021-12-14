import React from "react";
import ReactDOM from "react-dom";
import '/src/scss/general.scss';

import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import Modal from "react-modal";

const appElement = document.getElementById("app");

Modal.setAppElement(appElement)

// Modal.setAppElement(appElement)

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  appElement
);
