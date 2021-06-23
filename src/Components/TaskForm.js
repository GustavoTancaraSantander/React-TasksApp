import { Component } from "react";
import "./TaskForm.css";
export default class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };
  // important use Arrow ES6+, failed expresion: onSubmitTask() {}
  onSubmitTask = (event) => {
    // console.log("Submiting...", event);
    this.props.addTask(this.state.title, this.state.description);
    event.preventDefault();
  };
  onChange = (e) => {
    // console.log("e", e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitTask}>
        <input
          name="title"
          type="text"
          placeholder="Nueva tarea"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        <textarea
          name="description"
          placeholder="description"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>

        <button type="submit" className={"btn_Save"}>
          Save Task
        </button>
      </form>
    );
  }
}
