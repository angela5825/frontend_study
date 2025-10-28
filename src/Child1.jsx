import Child2 from "./Child2";
function Child1({ count, setCount }) {
  return (
    <div>
      <h2>Child 1</h2>
      <Child2 count={count} setCount={setCount}></Child2>
    </div>
  );
}

// 현재 문제: Child1은 count와 setCount를 이용하고 있지만 count 와 setCount 를 가지고 와야 함...
// 파라미터의 개수가 많아진다면???
// 실제 현업에서 원래 child5에 있는 내용이 increase 하는 기능을 child 3로 옮긴다면. 불편한 작업들이 늘어나게 된다
// 여기서 useContext를 이용하게 된다
export default Child1;
