import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }; // 1초 전에 10번을 눌러도 이전 값을 참조하기 때문에 3-> 4 로 넘어가는 건 오직 3에서만 참조
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Counter;
