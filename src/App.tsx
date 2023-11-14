import Button from './components/Button';

function App() {
  const textStrings = ['let us ', 'learn ', 'typescript'];

  return (
    <div className="flex justify-center items-center h-screen">
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
