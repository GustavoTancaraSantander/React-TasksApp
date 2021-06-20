import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import tasks from "./task.json";
import Tasks from "./Components/Tasks";
class App extends Component {
  state = {
    tasksList: tasks,
  };
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tasks List</h1>
        {/* {this.state.tasksList.map((e) => (
          <li key={e.id}>
            {e.title} - {e.description} - {e.done}
          </li>
        ))} */}
        <Tasks tasksList={this.state.tasksList}></Tasks>
      </div>
    );
  }
}

export default App;
