import { useReducer, useState } from "react";
import "./App.css";
import { userReducer, initialState } from "./userReducer";

const App = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleYearChange = (newYear) => {
    const age = new Date().getFullYear() - newYear;
    if (age < 18) {
      setWarning("Must be at least 18 years old!!");
    } else {
      setWarning("");
      setYear(newYear);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) => {
          dispatch({ type: "SET_NAME", payload: e.target.value });
        }}
      />
      <input
        type="number"
        placeholder="Enter your Birth Year"
        value={state.year}
        onChange={(e) => {
          dispatch({ type: "SET_YEAR", payload: e.target.value });
        }}
      />
      {state.warning && <p style={{ color: "red" }}>{state.warning}</p>}
      <p>Name : {state.name}</p>
      <p>Year : {state.year}</p>
    </div>
  );
};
export default App;
