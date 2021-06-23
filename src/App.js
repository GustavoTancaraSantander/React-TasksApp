import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import tasks from "./task.json";
import Tasks from "./Components/Tasks";
import TaskForm from "./Components/TaskForm";
class App extends Component {
  state = {
    tasksList: tasks,
  };
  addTask = (title, description) => {
    const newTask = {
      id: this.state.tasksList.length + 1,
      title,
      description,
      done: false,
    };
    this.setState({
      tasksList: [...this.state.tasksList, newTask],
    });
  };
  updateTask = (task) => {
    const updatedList = this.state.tasksList.map((e) => {
      if (e.id === task.id) {
        task.done = !task.done;
      }
      return e;
    });

    this.setState({
      tasksList: updatedList,
    });
  };
  deleteTask = (id) => {
    console.log(id);
    const newList = this.state.tasksList.filter((x) => x.id !== id);
    this.setState({
      tasksList: newList,
    });
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
        <TaskForm addTask={this.addTask}></TaskForm>
        <Tasks
          tasksList={this.state.tasksList}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
        ></Tasks>
      </div>
    );
  }
}

export default App;
