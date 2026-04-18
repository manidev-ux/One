type FunChildProps = {
  greet: string;
  age: number;
};

const FunChild = (props: FunChildProps) => {
  return (
    <>
      <h4>This is simple child component.</h4>
      <p>FunChild - Functional Child component.</p>
      <p>
        Hello {props.greet}, you are {props.age} years old.
      </p>
    </>
  );
};

export default FunChild;
