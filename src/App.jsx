import { CountProvider } from "./contexts/CountContext";
import "./App.css";
import Child1 from "./Child1";

const App = () => {
  return (
    <div>
      <h2>App</h2>
      <CountProvider>
        <Child1 />
      </CountProvider>
    </div>
  );
};
export default App;
