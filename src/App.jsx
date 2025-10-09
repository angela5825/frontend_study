import "./App.css";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState(["Learn React", "Build a project"]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    // setTodos
    // 할 일을 삭제하는 기능을 작성
    // 힌트 1 : 배열 filter 기능 이용
    // 힌트 2 : 현재 index를 파라미터로 받고 있음

    setTodos(todos.filter((todo, idx) => idx != index));
  };
  return (
    <>
      <h3>To do List</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>

      <p>Typing : {newTodo}</p>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(newTodo);
        }}
      >
        Add New Task
      </button>
    </>
  );
};

export default App;
