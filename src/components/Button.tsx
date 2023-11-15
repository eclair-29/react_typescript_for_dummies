//.. START typescript lesson - 08. function typing

type FontSizes = 20 | 24 | 30 | 36;

type ButtonProps = {
  children: string[];
  // children: [string, string, string]; // ...tuple (length specific)
  heading?: FontSizes;
  styles: React.CSSProperties;
  onBtnClick: (response: string) => string; // | void
};

const Button = ({ children, styles, onBtnClick }: ButtonProps) => {
  return (
    <button
      onClick={() => onBtnClick('hi!')}
      style={styles}
      className="pt-4 pb-3 px-6"
    >
      {children.map((text) => text)}
    </button>
  );
};

//.. END typescript lesson - 08. function typing

export default Button;
