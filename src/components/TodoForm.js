import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      newTodo: ""
    };
  }

  
  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addTodo(this.state.newTodo);

    this.setState({
      newTodo: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
