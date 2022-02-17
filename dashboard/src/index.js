import React from "react";
import Layout from "./components/Layout";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./store/reducers";
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
    </Provider>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
