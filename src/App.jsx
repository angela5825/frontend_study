import { useEffect, useState } from "react";
import "./App.css";
import { delay } from "./delay";
import Timer from "./Timer";

const App = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showTimer}
          onChange={(e) => setShowTimer(e.target.checked)}
        />
        Show Timer
      </label>
      {showTimer && <Timer />}
    </>
  );
};
export default App;
