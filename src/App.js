import logo from "./logo.svg";
import "./App.css";

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
        HiComponent : <HiComponent></HiComponent>
      </div>
      <ComponentApp></ComponentApp>
    </div>
  );
}

function HiComponent() {
  return <div>Hi, welcome App React</div>;
}
const ComponentApp = () => <div>this ComponentApp Arrow ES6</div>;

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
