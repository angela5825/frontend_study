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
  // 나이가 표시되게  : 나이가 18세 이상만 넣을 수 있게 하기

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
