import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  async componentDidMount() {
    try {
      let url0 = "http://localhost/api/test/";
      let res0 = await axios.get(url0);
      console.log(res0.data);
    } catch (e) {
      console.log("1 failed");
    }

    try {
      let url1 = "http://localhost/api/hello/";
      let res1 = await axios.get(url1);
      console.log(res1.data);
    } catch (e) {
      console.log("2 failed");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
