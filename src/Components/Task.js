import { Component } from "react";
import PropTypes from "prop-types";
class Task extends Component {
  // https://reactjs.org/docs/lists-and-keys.html#keys
  // <li key={this.props.item.id.toString()}>
  styleComplet() {
    return {
      fontSize: "20",
      color: this.props.item.done ? "gray" : "black",
      textDecoration: this.props.item.done ? "line-through" : "none",
    };
  }
  render() {
    const { item } = this.props;
    return (
      <li style={this.styleComplet()}>
        {item.title} - {item.description} - {item.done}
        <input type="checkbox" />
        <button style={{ background: "#ad3232", cursor: "pointer" }}>X</button>
      </li>
    );
  }
}
Task.propTypes = {
  item: PropTypes.object,
};

export default Task;
