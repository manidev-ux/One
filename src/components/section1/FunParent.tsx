import FunChild from "./FunChild";

const FunParent = () => {
  return (
    <>
      <h4>This Is Simple parent component.</h4>
      <p>FunParent- Functional Parent component.</p>
      <FunChild greet="Alice" age={25} />
    </>
  );
};
export default FunParent;