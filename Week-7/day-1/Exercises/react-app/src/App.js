import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals'
import BootstrapCard from './BootstrapCard'
import ListGroup from './List-group';
import Exercise  from './Exercise3';
import "bootstrap/dist/css/bootstrap.min.css";

const celebrities = [
    {
        title: 'Bob Dylan',
        imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
        buttonLabel: 'Go to Wikipedia',
        buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
        description:
            'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    },
    {
        title: 'McCartney',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
        buttonLabel: 'Go to Wikipedia',
        buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
        description:
            'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
    },
]

const myelement = <h1>I Love JSX!</h1>
const sum = 5+5
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];



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

      {/* Map over the celebrities array to render multiple BootstrapCards */}
          {celebrities.map((celebrity, index) => (
            <BootstrapCard
              key={index} // Add a unique key for each item in the map
              title={celebrity.title}
              imageUrl={celebrity.imageUrl}
              buttonUrl={celebrity.buttonUrl}
              description={celebrity.description}
            />
          ))}



       
          {planets.map((planet, index) => (
            <ListGroup
                key={index} 
                name={planet}
             />
          ))}
   


            
        </div>


      </header>

         <Exercise />
      
    </div>
  );
}

export default App;
