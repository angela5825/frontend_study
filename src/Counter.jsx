import { useRef, useState } from "react";

// let countVar=0;

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const refCount = useRef(0);

  const incrementRef = () => {
    refCount.current += 1;
    // countVar++;
    setCount1(refCount.current);
    console.log("Ref Count : ", countVar);
  };
  const syncCounts = () => {
    setCount1(refCount.current);
    setCount2((prev) => prev + 1);
  };
  return (
    <>
      <h2> Counter Example</h2>
      <p>Count 1 : {count1}</p>
      <p>Count 2 : {count2}</p>
      <button onClick={incrementRef}>useRef</button>
      <button onClick={syncCounts}>useState</button>
    </>
  );
}

export default Counter;
