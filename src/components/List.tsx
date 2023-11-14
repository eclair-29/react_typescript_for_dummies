//.. START typescript lesson - 07. record types

type Subjects = 'algebra' | 'english' | 'pe' | 'arts' | 'biology';

type StudentProps = {
  grades: Record<Subjects, number>;
};

const List = ({ grades }: StudentProps) => {
  return (
    <ul className="max-w-xs	w-full mx-auto mb-4 border-b-2 border-black">
      <li className="flex justify-between border-2 border-black p-2 border-b-0">
        <span>Algebra</span>
        <span>{grades.algebra}</span>
      </li>
      <li className="flex justify-between border-2 border-black p-2 border-b-0">
        <span>English</span>
        <span>{grades.english}</span>
      </li>
      <li className="flex justify-between border-2 border-black p-2 border-b-0">
        <span>Arts</span>
        <span>{grades.arts}</span>
      </li>
      <li className="flex justify-between border-2 border-black p-2 border-b-0">
        <span>PE</span>
        <span>{grades.pe}</span>
      </li>
      <li className="flex justify-between border-2 border-black p-2 border-b-0">
        <span>Biology</span>
        <span>{grades.biology}</span>
      </li>
    </ul>
  );
};

//.. END typescript lesson - 07. record types

export default List;
