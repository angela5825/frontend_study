function Child2({ count, setCount }) {
  return (
    <div>
      <h2>Child 2</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>increase</button>
    </div>
  );
}

export default Child2;
