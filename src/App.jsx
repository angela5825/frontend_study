import { useMemo, useState, useCallback } from "react";
import "./App.css";
import Child from "./Count";
/*
useCallback
- 함수를 메모이제이션하는 React Hook
- 불필요한 함수 재생성을 방지하여 성능을 최적화할 때 사용

함수를 전달할 때 useCallback 훅을 사용하여 전달하면
콜백함수를  랜더링할 때 재사용하기 때문에 다른 것으로 인식하지 않음
첫번째 인자를 함수로 받고 두번째 인자로 의존성 배열을 받는데 의존성 배열이 변경되지 않으며 이전 
함수 객체를 그대로 사용 

*/

const App = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <>
      <h2>Parent</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setActive((a) => !a)}>Change Name </button>
      <p>Count : {count}</p>
      <Child active={active} onClick={handleClick} />
      {/* solution 함수를 저장하는 useCallback을 이용한다  */}
    </>
  );
};
export default App;
