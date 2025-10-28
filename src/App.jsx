import { useState } from "react";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

/*

Context
- React에서 전역적으로 상태를 관리할 때 사용하는 기능
- 컴포넌트 간의 데이터를 쉽게 공유할 수 있도록 함
- props drilling(깊은 props 전달 문제)를 해결할 때 유용

부모 컴포넌트에서 자식 컴포넌트 값을 전달할 때 부모1 > 자식1> 자식2
와 같이 값을 전달할 때 자식2만 값이 필요함에도 계층구조를 통해 전달해야 하는 불편함이 있는데 이를 해결할 때 사용

*/

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>App</h2>
      <Child1 count={count} setCount={setCount} />
    </div>
  );
};
export default App;
