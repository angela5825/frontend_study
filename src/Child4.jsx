import { ToggleContext } from "./contexts/ToggleContext";
import { useContext } from "react";

function Child4() {
  const { toggle } = useContext(ToggleContext);
  return (
    <div>
      <h2>Child4</h2>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default Child4;
