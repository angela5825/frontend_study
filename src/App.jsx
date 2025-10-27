import { useEffect, useState } from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  // 과제 1. useState 훅을 이용하여 count의 값을 증가시키고 감소시키는 기능을 작성하세요
  // 과제 2. 화면의 사이즈가 변경되었을 때 변경된 가로 새로 크기를 화면에 표시되는 기능을 작성하세요
  const { width, height } = useWindowSize();

  return (
    <>
      <h2>화면의 사이즈 </h2>
      <h3> 가로 크기 : {width}</h3>
      <h3>세로 크기 : {height}</h3>
    </>
  );
};
export default App;
