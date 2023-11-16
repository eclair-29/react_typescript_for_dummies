//.. START typescript lesson - 13. generics

// const convertToArray = <T,>(value: T): T[] => [value];

function convertToArray<T>(value: T): T[] {
  return [value];
}

convertToArray(3);
convertToArray('hello');

const Button = () => {
  return <button className="pt-4 pb-3 px-6">Click</button>;
};

//.. END typescript lesson - 13. generics

export default Button;
