import "./App.css";

import { CountProvider } from "./contexts/CountContext";
import Child1 from "./Child1";
import Child3 from "./Child3";
import { ToggleProvider } from "./contexts/ToggleContext";

const App = () => {
  return (
    <>
      <h2>App</h2>
      <CountProvider>
        <Child1 />
      </CountProvider>

      <ToggleProvider>
        <Child3 />
      </ToggleProvider>
    </>
  );
};
export default App;
