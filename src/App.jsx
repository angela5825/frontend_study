import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [warning, setWarning] = useState("");
  const handleNameChange = (newName) => {
    const formattedName = newName.trim().toLowerCase();
    setName(formattedName);
  };
  const handleYearChange = (newYear) => {
    const age = new Date().getFullYear() - newYear;
    if (age < 18) {
      setWarning("Must be at least 18 years old!!");
    } else {
      setWarning("");
      setYear(newYear);
    }
  };

  // 아래 이름과 나이를 업데이트 하는 로직을 useReducer를 사용하여 작성하세요
  // 순서 1 : initialState 작성
  //     2 : useReducer 작성
  // state 는 {name : '', year : '', warning : ''}
  // action은 {type : 'SET_NAME' }, {type : 'SET_YEAR' }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          handleNameChange(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Enter your Birth Year"
        value={year}
        onChange={(e) => {
          handleYearChange(e.target.value);
        }}
      />
      {warning && <p style={{ color: "red" }}>{warning}</p>}
      <p>Name : {name}</p>
      <p>Year : {year}</p>
    </div>
  );
};
export default App;
