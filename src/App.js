import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div id="HiComponent-id">
        HiComponent :
        <br />
        <HiComponent myProps="P1" subtitle="loremsub1"></HiComponent>
        <HiComponent myProps="P2"></HiComponent>
        <HiComponent myProps="P3!"></HiComponent>
      </div>
      <ComponentApp></ComponentApp>
      <StateComponent myProps="myProps"></StateComponent>
    </div>
  );
}

function HiComponent(props) {
  return (
    <div>
      Hi, welcome App React {props.myProps} <b>{props.subtitle}</b>
    </div>
  );
}
const ComponentApp = () => <div>this ComponentApp Arrow ES6</div>;

class StateComponent extends Component {
  state = {
    show: false,
  };
  toggleShow = () => {
    this.setState({ show: false });
  };
  render() {
    if (this.state.show) {
      return (
        <div className="App-header">
          <h3> StateComponent - Class</h3>
          <p>{this.props.myProps}</p>
          <button onClick={this.toggleShow}>Hide components</button>
        </div>
      );
    } else {
      return (
        <div className="App-header">
          There not elememts here!
          {/* <button onClick={() => (this.state.show = !this.state.show)}> */}
          <button onClick={() => this.setState({ show: true })}>
            Show components
          </button>
        </div>
      );
    }
  }
}

/* class StateShowBtn extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.show}> Action </button>
      </div>
    );
  }
} */

/* import {Component} from 'react'

class AppReact extends Component {
  render() {
    return (
      <div>
        <ComponentApp></ComponentApp>
      </div>
    );
  }
}

export default AppReact; */

export default App;
