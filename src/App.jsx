import { useMemo, useState, useCallback } from "react";
import "./App.css";
import Child from "./Count";
import Component from "./Component";

const App = () => {
  return (
    <>
      {/* 내부  
      Component({someProp: "Value", children : 내용}) -> 이 내용이 객체 디스트럭쳐링이 되는 거 
      */}
      <Component someProp="value">
        <h1>내부 객체 테스트</h1>
      </Component>
    </>
  );
};
export default App;
