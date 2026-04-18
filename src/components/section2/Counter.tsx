import { Component } from "react";

interface CounterState {
  count: number;
}

class Counter extends Component<Record<string, never>, CounterState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  reset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <>
        <h4>Counter: {this.state.count}</h4>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default Counter;
