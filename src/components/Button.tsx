import { ReactNode } from 'react';

//.. START typescript lesson - 03. union types

type ButtonProps = {
  children: ReactNode;
  backgroundColor: 'teal' | 'blue' | 'green'; //...union type
  fontSize: 20 | 24; //...union type
  textColor: 'black' | 'white'; //...union type
};

//.. END typescript lesson - 03. union types

const Button = ({
  children,
  backgroundColor,
  fontSize,
  textColor,
}: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor, fontSize, color: textColor }}
      className="pt-4 pb-3 px-6"
    >
      {children}
    </button>
  );
};

export default Button;
