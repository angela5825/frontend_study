import React from "react";

function Child({ active }) {
  console.log("child rendered");
  return <p>Child : {active ? "Active" : "Not Active"}</p>;
}

export default React.memo(Child);
