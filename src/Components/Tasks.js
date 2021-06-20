import { Component } from "react";
import Task from "./Task";
class Tasks extends Component {
  render() {
    return (
      <div>
        {this.props.tasksList.map((task) => (
          <Task item={task} key={task.id.toString()} />
        ))}
      </div>
    );
  }
}

export default Tasks;
