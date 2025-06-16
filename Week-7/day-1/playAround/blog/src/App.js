import logo from './logo.svg';
import './App.css';
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
const myelement1 = (
  <>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
    <input type="text" />
  </>
);
function App() {
  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         let's start this journy 
        </a>
          { myelement }
          { myelement1 }
      </header>
    </div>
  );
}

export default App;
