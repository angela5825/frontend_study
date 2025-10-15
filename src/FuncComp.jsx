import { useEffect, useState } from "react";

const FuncComp = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("--Rendering--");

  const handleIncrement = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  useEffect(function () {
    console.log("1. Mounted");
    return function () {
      // 컴포넌트를 벗어났을 때 이 함수가 호출된다
      console.log("3. Unmounted");
    };
  }, []);

  // 콜백인자 , 어떤 인자를 가지고 생명주기를 관리할 것인가
  // 화면을 벗어났을 때는 ?

  // 화면이 업데이트
  useEffect(() => {
    console.log("1. Mounted / 3. Updated");
  }, [count]);
  return (
    <div>
      <h2>Function Component</h2>
      <h3>Count : {count}</h3>
      <button onClick={() => handleIncrement(setCount)}>Increase</button>
      <h3>Count2 : {count2}</h3>
      <button onClick={() => handleIncrement(setCount2)}>Increase</button>
    </div>
  );
};

export default FuncComp;
