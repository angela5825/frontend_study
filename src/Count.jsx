import React from "react";

function Child({ active, onClick }) {
  console.log("child rendered");
  return (
    <div>
      <p>Child : {active ? "Active" : "Not Active"}</p>
      <button onClick={onClick}>Increase</button>
    </div>
  );
}

export default React.memo(Child);
