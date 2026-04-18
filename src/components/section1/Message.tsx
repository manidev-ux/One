import { Component } from "react";

type MessageState = {
  message: string;
};

class Message extends Component<Record<string, never>, MessageState> {
  state: MessageState = {
    message: "Welcome to React Js",
  };

  render() {
    return (
      <>
        <h4>{this.state.message}</h4>
        <button
          onClick={() =>
            this.setState({ message: "React is Very Powerful!" })
          }
        >
          Click me
        </button>
      </>
    );
  }
}

export default Message;