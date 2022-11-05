import React, { useState } from "react";
import "./App.css";

let uid = 0;

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    // let prev = [...todoList];
    // prev.push({
    //   id: ++uid,
    //   name: todoName,
    // });
    // setTodoList(prev);
    setTodoName("");
    setTodoList([...todoList, { id: ++uid, name: todoName }]);
  };

  const handleDelete = (idx, id) => {
    // let prev = [...todoList];
    // prev.splice(idx, 1);
    // setTodoList(prev);
    setTodoList(todoList.filter((el) => el.id !== id));
  };

  console.log(">>", todoList);

  return (
    <>
      <h1>Use Array as State in React</h1>
      <div className="App">
        <h2>Todo Notes:</h2>
        <input
          type={"text"}
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>

        <ul>
          {todoList.map((el, i) => {
            return (
              <React.Fragment key={i}>
                <li>{el.name}</li>
                <button onClick={() => handleDelete(i, el.id)}>Delete</button>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
