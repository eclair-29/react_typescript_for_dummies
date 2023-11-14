import Button from './components/Button';

function App() {
  const textStrings = ['let us ', 'learn ', 'typescript'];

  return (
    <div className="flex justify-center items-center h-screen">
      <Button backgroundColor="teal" fontSize={20} textColor="white">
        {textStrings}
      </Button>
    </div>
  );
}

export default App;
