//.. START typescript lesson - 11. as const

const buttonTextOptions = ['Click Me ', 'Button Here ', 'Hello!'] as const;
// as const - readonly, and you can't push or add newer entries on the array

const Button = () => {
  return (
    <button className="pt-4 pb-3 px-6">
      {buttonTextOptions.map((option) => option)}
    </button>
  );
};

//.. END typescript lesson - 11. as const

export default Button;
