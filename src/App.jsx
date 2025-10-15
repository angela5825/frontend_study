import { useState } from "react";
import "./App.css";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
const App = () => {
  // 변수로 어떤 게 선택되었는 지 저장하는 변수를 선언

  const [selected, setSelected] = useState("");

  return (
    <>
      {["", "ClassComp", "FuncComp"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            onChange={(e) => setSelected(e.target.value)}
            checked={selected === option}
          />
          {option || "None"}
        </label>
      ))}
      {/* 를 map을 이용해서 loop를 돌림 */}

      {/* 공백이 아닐 경우 오른쪽에 */}
      {selected && (selected === "ClassComp" ? <ClassComp /> : <FuncComp />)}
    </>
  );
};
export default App;
