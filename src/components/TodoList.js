import React from "react";
import TodoCard from "./TodoCard";


const TodoList = (props) => {
  
  return (
    <div className="todo-list">
      {props.items.map((item) => (
        <TodoCard key={item.id} data={item} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
};

export default TodoList;
