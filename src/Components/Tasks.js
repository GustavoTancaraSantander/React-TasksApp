import { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";
class Tasks extends Component {
  render() {
    return (
      <div>
        {this.props.tasksList.map((task) => (
          <Task
            item={task}
            key={task.id.toString()}
            deleteTask={this.props.deleteTask}
            updateTask={this.props.updateTask}
          />
        ))}
      </div>
    );
  }
}
// https://reactjs.org/docs/typechecking-with-proptypes.html
Tasks.propTypes = {
  tasksList: PropTypes.array.isRequired,
};

export default Tasks;
