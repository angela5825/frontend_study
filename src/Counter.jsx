import { useReducer, useState } from "react";

// 현재 상태 변경 로직을 정의하는 함수

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      throw new Error("UNKNOWN ACTION");
  }
}

// 초기 상태 값
const initialState = {
  count: 0,
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleClick = () => {
  //   setTimeout(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);
  // }; // 1초 전에 10번을 눌러도 이전 값을 참조하기 때문에 3-> 4 로 넘어가는 건 오직 3에서만 참조

  const handleClick = () => {
    setTimeout(() => {
      dispatch({ type: "INCREMENT" });
    }, 1000);
  };
  return (
    <div>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
}

export default Counter;
