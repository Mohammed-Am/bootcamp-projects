import './App.css';
import Vote from './Vote'
import { useState } from 'react';

function App() {

  const [ languages , setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ])


  return (
    
    <>

    {
        languages.map((lang , index) => {
              return <Vote key={index} lang = {lang.name} vote = {lang.votes} set={setLanguages} index = {index} />
         })
    }
    

       
    </>
  );
}

export default App;
