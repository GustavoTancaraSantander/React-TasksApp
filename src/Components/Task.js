import { Component } from "react";

class Task extends Component {
  // https://reactjs.org/docs/lists-and-keys.html#keys
  // <li key={this.props.item.id.toString()}>
  render() {
    const { item } = this.props;
    return (
      <li>
        {item.title} - {item.description} - {item.done}
        <input type="checkbox" />
        <button>X</button>
      </li>
    );
  }
}

export default Task;
