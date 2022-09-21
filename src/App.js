import logo from "./logo.svg";
import "./App.css";

function nothing() {
  console.log("Here");
}

function nothing_else() {
  console.log("Here and there");
  let i = 1;
  if( i === 1 ){
    console.log("here too");
  }else{
    console.log("not here");
  }
}

function App() {
  return (
    <div className="App" onClick={ nothing_else }>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={ nothing }/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with GHActions22
        </a>
      </header>
    </div>
  );
}

export default App;