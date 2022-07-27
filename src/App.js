import './App.css';

// COMPONENT
const Person = () => {
  return (
    <>
      <h1>Name: John</h1>
      <h2>Last Name: Cañero</h2>
      <h2>Age: 23</h2>
    </>
  )
}


// TRANSFER COMPONENT TO <[variable] />
const App = () => {
  const name = 'Jam';

  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
