import './App.css';

// COMPONENT
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}


// TRANSFER COMPONENT TO <[variable] />
const App = () => {
  const name = 'Jam';

  return (
    <div className="App">
        <Person 
        name={"Snowball"} 
        lastName={"Jam"} 
        age={12} 
      />
        <Person 
        name={"Jolli"} 
        lastName={"Bee"}
        age={25} 
       />
    </div>
  );
}

export default App;
