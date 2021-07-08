import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles/styles.css"



const todoList = [
  {
    name: "play soccer",
    id: 1,
    done: false
  },
  {
    name: "study",
    id: 2,
    done: false
  }
]

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      todo: todoList,
      anotherState: []
    }
  }

  toggleItem = (id) => {
    // Change the "Purchased" to false or the other way around
    console.log("id", id)
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item;
        }
      })
    })
  }

  addTodo = (newName) => {
   
    const newObject = {
      name: newName,
      id: Date.now(),
      done: false
    }

    this.setState({
      todo: [...this.state.todo, newObject]
    })
  }

  render() {
     return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          Item={this.state.Todo} 
          toggleItem={this.toggleItem} 
        />
      </div>
    );
     }

  }


export default App;
