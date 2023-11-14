import Button from './components/Button';

function App() {
  const textStrings = ['let us ', 'learn ', 'typescript'];

  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        styles={{
          backgroundColor: 'teal',
          color: '#fff',
          fontSize: 20,
        }}
      >
        {textStrings}
      </Button>
    </div>
  );
}

export default App;
