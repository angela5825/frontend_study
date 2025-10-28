import { useContext } from "react";
import { CountContext } from "./contexts/CountContext";

function Child2() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h2>Child 2</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}

export default Child2;
