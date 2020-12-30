import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import "./index.scss";
import store from "./store/index";

const root = document.getElementById("root");
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
