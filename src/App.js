import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Feed from "./components/Feed";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Feed} />
      </BrowserRouter>
    );
  }
}

export default App;
