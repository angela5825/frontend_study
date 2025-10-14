import "./App.css";
import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null); // DOM이랑 연결할 때는 null 로 선언 한다
  const divRef = useRef(null);
  const handleFocus = () => {
    // console.log("helo");
    // document.getElementById("focusInput").focus();
    // 리엑트에서는 getElement 를 잘 이용하지 않는다..
    // 아이디가 다른 데에서 겹칠 수도 있기 때문에
    // useRef에서 DOM //
    console.log(inputRef.current);
    inputRef.current.focus();
    divRef.current.style.width = "200px";
    divRef.current.style.height = "200px";
    divRef.current.style.backgroundColor = "green";
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type..." />
      <button onClick={handleFocus}>Focus Input</button>

      <div ref={divRef} onClick={handleFocus} style={{ pointer: " cursor" }}>
        이것은 초록색 200x200 크기를 가진 박스로 변경됩니다.
      </div>
    </div>
  );
};
export default App;
