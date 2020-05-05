import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";

import "./assets/styles/index.scss";
import 'materialize-css/dist/css/materialize.min.css';
import store from "./store";

ReactDOM.render(
    <Provider store={ store } >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById("root")
);
