import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise  from './Exercise3';

const myelement = <h1>I Love JSX!</h1>
const sum = 5+5
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>Hello World!</p>
        <h5>{myelement}</h5>
        <h1>React is {sum} times better with JSX</h1>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
         <div>
          <h1>My Favorite Animals</h1>
            <UserFavoriteAnimals favAnimals={user.favAnimals} />
        </div>


      </header>

         <Exercise />
      
    </div>
  );
}

export default App;
