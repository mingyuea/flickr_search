//import Root from './Root.js';

import store from "../store/index.js";
import {inputVal, importData} from "../actions/index.js";
window.store = store;
window.inputVal = inputVal;
window.importData = importData;

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Root from "./Root.js";

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);