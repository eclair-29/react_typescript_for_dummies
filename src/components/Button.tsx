import { useState } from 'react';

type FontSizes = 20 | 24 | 30 | 36;

type ButtonProps = {
  children: string[];
  // children: [string, string, string]; // ...tuple (length specific)
  heading?: FontSizes;
  styles: React.CSSProperties;
  onBtnClick?: (response: string) => string; // | void
  defaultValue: string;
  btnId?: number;
};

//.. START typescript lesson - 10. useState typing

type Students = {
  name: string;
  gradeLevel: number;
  section: string;
  gradeMarks: string[];
  // ...
};

const Button = ({ children, styles, ...rest }: ButtonProps) => {
  const [students, setStudents] = useState<Students[] | null>(null);

  const getStudents = () => students;
  // const studentSection = students && students[0]?.section;

  return (
    <button
      onClick={() => getStudents}
      style={styles}
      {...rest}
      className="pt-4 pb-3 px-6"
    >
      {children.map((text) => text)}
    </button>
  );
};

//.. END typescript lesson - 10. useState typing

export default Button;
