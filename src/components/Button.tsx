import { useEffect } from "react";

//.. START typescript lesson - 12. as type assertion

type ButtonColor = 'red' | 'blue' | 'green';

const Button = () => {
  useEffect(() => {
    const previousBtnColor = localStorage.getItem('buttonColor') as ButtonColor;
    // override the string | null ts inference to ButtonColor type
  }), []);

  return <button className="pt-4 pb-3 px-6">Click</button>;
};

//.. END typescript lesson - 12. as type assertion

export default Button;
