type FontSizes = 20 | 24 | 30 | 36;

//.. START typescript lesson - 09. rest and spread

type ButtonProps = {
  children: string[];
  // children: [string, string, string]; // ...tuple (length specific)
  heading?: FontSizes;
  styles: React.CSSProperties;
  onBtnClick: (response: string) => string; // | void
  defaultValue?: string;
  btnId?: number;
};

const Button = ({ children, styles, onBtnClick, ...rest }: ButtonProps) => {
  return (
    <button
      onClick={() => onBtnClick('hi!')}
      style={styles}
      {...rest}
      className="pt-4 pb-3 px-6"
    >
      {children.map((text) => text)}
    </button>
  );
};

//.. END typescript lesson - 09. rest and spread

export default Button;
