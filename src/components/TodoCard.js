import React from "react";


const item = props => {
 
  console.log(props.data)
  return (
    <div onClick={() => props.toggleItem(props.data.id)}
    className={`item ${props.data.done ? " done" : ""}`}
    >
      <p>{props.data.name}</p>
      
    </div>
  );
};

export default item;
