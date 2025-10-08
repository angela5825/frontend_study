import { Component } from "react";

class Classcomp extends Component {
  render() {
    return <p>Class Comp</p>;
  }
}

function FunctionComp() {
  return <p>Function Comp</p>;
}

const ArrowFunctionComp = () => {
  return <p>Arrow Fucntion Comp</p>;
};

export { FunctionComp, ArrowFunctionComp, Classcomp };
