//.. START typescript lesson - 01. variable types

// typescript auto infer variable types
const str = 'Hello there!';
// str = 11;

// typescript auto infer function args by assigning 'any' by default (and we don't want that)
const setProductBrand = (brand: string, isNew: boolean): [string, boolean] => {
  // ...
  return [brand, isNew];
};

setProductBrand('Tesla', false);

//.. END typescript lesson - 01. variable types

const Button = () => {
  return <button className="bg-teal-500 text-white py-4 px-6">Click Me</button>;
};

export default Button;
