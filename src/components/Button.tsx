import { ReactNode } from 'react';

//.. START typescript lesson - 03. union types

type Colors = 'teal' | 'blue' | 'green' | 'black' | 'white';
type FontSizes = 20 | 24 | 30 | 36;

type ButtonProps = {
  children: ReactNode;
  backgroundColor: Colors; //...union type
  fontSize: FontSizes; //...union type
  heading?: FontSizes;
  textColor: Colors; //...union type
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
