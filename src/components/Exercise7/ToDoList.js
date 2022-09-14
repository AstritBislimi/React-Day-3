import { useState } from "react";
import "./ToDoList.css";
const ToDoList = () => {
  const [listItems, setListItems] = useState([]);
  const [inpValue, setInpValue] = useState("");

  function addTaskHandler() {
    setListItems((prevList) => {
      return [
        ...prevList,
        {
          name: inpValue,
          id: prevList.length,
          done: false,
        },
      ];
    });
    setInpValue("");
  }

  function taskStateHandler(e, id) {
    if (e.target.id == id) {
      setListItems((prevList) => {
        return [...prevList, (prevList[id].done = !prevList[id].done)];
      });
    }
  }

  return (
    <div>
      <h2>To do list</h2>
      <input
        onChange={(e) => setInpValue(e.target.value)}
        value={inpValue}
      ></input>
      <button onClick={addTaskHandler}>Add Task</button>
      <ul>
        {listItems.map((el, i) => (
          <li
            key={i}
            id={i}
            className={el.done ? "done" : "todo"}
            onClick={(e) => taskStateHandler(e, el.id)}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
