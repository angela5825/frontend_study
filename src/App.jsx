import "./App.css";
import { useState } from "react";

// const App = () => {
//   // let count = 0;
//   const [count, setCount] = useState(0);

//   // 내부적으로 배열을 반환을 하는데 변수의 값과 그 변수의 값을 변경시키는 함수
//   return (
//     <>
//       <h2>Count : {count}</h2>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//     </>
//   );
// };

const App = () => {
  // let isPinned = true;
  const [isPinned, setPin] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setPin((p) => !p);
          // console.log({ isPinned });
        }}
      >
        {isPinned && "📌"} Pinn This!
      </button>
    </>
  );
};

export default App;
