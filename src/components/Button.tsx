//.. START typescript lesson - 04. array typing

type Colors = 'teal' | 'blue' | 'green' | 'black' | 'white';
type FontSizes = 20 | 24 | 30 | 36;

type ButtonProps = {
  children: string[]; // ...unli define strings
  // children: [string, string, string]; // ...tuple (length specific)
  backgroundColor: Colors;
  fontSize: FontSizes;
  heading?: FontSizes;
  textColor: Colors;
};

//.. END typescript lesson - 04. array typing

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
      {children.map((text) => text)}
    </button>
  );
};

export default Button;
