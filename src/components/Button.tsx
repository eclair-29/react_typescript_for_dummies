import { ReactNode } from 'react';

//.. START typescript lesson - 02. react component typing

// specific to props typing (type or interface...depending to your preference)
type ButtonProps = {
  children: ReactNode;
  backgroundColor: string;
  fontSize: number;
  textColor: string;
};

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

//.. END typescript lesson - 02. react component typing

export default Button;
