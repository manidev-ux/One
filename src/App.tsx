import ArrowGreet from "./components/section1/ArrowGreet";
import FunParent from "./components/section1/FunParent";
import Greet from "./components/section1/Greet";
import Make from "./components/section1/Make";
import Message from "./components/section1/Message";

function App() {
  return (
    <div className="App">
      <h3>Welcome to my React App!</h3>
      <Greet />
      <ArrowGreet />
      <Make />
      <FunParent />
      <Message />
    </div>
  );
}

export default App;
