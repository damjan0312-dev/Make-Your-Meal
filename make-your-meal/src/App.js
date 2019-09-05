// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

import "./App.css";

import { Provider } from "react-redux";
import store from "./Store/store";

import Router from "./Router";

//components
import { Navigation } from "./Navigation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
        <Router />
      </Provider>
    );
  }
}

export default App;
