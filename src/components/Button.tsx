//.. START typescript lesson - 06. style typing

type FontSizes = 20 | 24 | 30 | 36;

type ButtonProps = {
  children: string[];
  // children: [string, string, string]; // ...tuple (length specific)
  heading?: FontSizes;
  styles: React.CSSProperties;
};

const Button = ({ children, styles }: ButtonProps) => {
  return (
    <button style={styles} className="pt-4 pb-3 px-6">
      {children.map((text) => text)}
    </button>
  );
};

//.. END typescript lesson - 06. style typing

export default Button;
