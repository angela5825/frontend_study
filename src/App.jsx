import { useMemo, useState } from "react";
import "./App.css";
import Child from "./Count";
const App = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  return (
    <>
      <h2>Parent</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setActive((a) => !a)}>Change Name </button>
      <p>Count : {count}</p>
      <Child active={active} />
      {/* 카운트 관련 버튼을 클릭하는데 child가 랜더링 된다. */}
    </>
  );
};
export default App;
