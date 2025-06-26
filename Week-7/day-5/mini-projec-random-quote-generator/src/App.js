import {  useState } from 'react';
import './App.css';
import quotes  from './QuotesDatabase';
function App() {
    const [index , setIndex] =  useState(1);
    const [color, setColor] = useState('#ffffff')

    const getRandomColor = () => {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
   };
    const handleNewQuote = () => {
           setIndex(Math.floor(Math.random() * quotes.length))
           setColor(getRandomColor())
      };

  return (
 
   <>
   
        {
          quotes.slice(1,2).map((quote)=>(
            <div
                className="quote-container"
                style={{
                  backgroundColor: color,
                  minHeight: '100vh',
                  transition: 'background-color 0.3s ease',
            }}
            >
           <div className="quote-content">
            <p>{quotes[index].quote}</p>
            <h6>{quotes[index].author}</h6>
            <button onClick={handleNewQuote}>New quote</button>
          </div>
          </div>
                   
          ))
        }
      
  
   </>
  );
}

export default App;
