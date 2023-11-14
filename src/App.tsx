import Button from './components/Button';
import List from './components/List';

function App() {
  const textStrings = ['let us ', 'learn ', 'typescript'];

  const student = {
    grades: {
      algebra: 90,
      english: 85,
      arts: 95,
      pe: 90,
      biology: 90,
      // physics: 12, //...still allowed? why?
    },
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <List grades={student.grades} />
      <Button
        styles={{
          borderWidth: 2,
          borderColor: '#000',
          color: '#000',
          fontSize: 20,
        }}
      >
        {textStrings}
      </Button>
    </div>
  );
}

export default App;
