import { Component } from "react";

class Adder extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>현재 count : {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1 증가
        </button>
      </div>
    );
  }
}

export default Adder;
