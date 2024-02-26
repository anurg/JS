import React from "react";
import ReactDOM from "react-dom/client";
import $ from "jquery";
import "./index.css";
import "./components/login/login.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Login } from "./components/login/login";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import * as bootstrap from "bootstrap";
// import { DataBinding } from "./components/data-binding/data-binding";
import { NasaAPI } from "./components/nasa-api/nasa-api";
import { TwoWayBinding } from "./components/two-way-binding/two-way-binding";
import { StyleDemo } from "./components/style-demo/style-demo";
import { EventDemo } from "./components/event-demo/event-demo";
import { TimerDemo } from "./components/timer-demo/time-demo";
import { SlideShow } from "./components/slide-show/slide-show";
import { FormDemo } from "./components/form-demo/form-demo";
import { HookForm } from "./components/hook-form/hook-form";
import { CustomDemo } from "./components/custom-demo/custom-demo";
import { ContextDemo } from "./components/context-demo/context-demo";
import { ReducerDemo } from "./components/reducer-demo/reducer-demo";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ReducerDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
