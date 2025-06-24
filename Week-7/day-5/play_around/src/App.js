import { createContext, useEffect, useState } from 'react';
import './App.css';
import Top from './Component/Top'
export const UsernameContex = createContext()

function App() {
  const username = 'Mohammed'
  const [fetchData , setFetchData] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ errorMessage ] = useState('')


  
  useEffect(()=>{
 
    const getData = async () => {
         
          try{
            setLoading(true)
             const res = await fetch('https://jsonplaceholder.typicode.com/photos');
             const data = await res.json()
             if (res.status === 200) {
               setFetchData(data)
                setLoading(false)

             }
          }
          catch(error){
              setLoading(false)
              console.log(error)
          }
    }

    getData()
      
  },[])

  return (
        <UsernameContex.Provider value={username}>

        <h1>
          {loading && <p>is loading...</p>}
          {!loading && errorMessage && <p>{errorMessage}</p> }
          {!loading && fetchData && (
            <ul>
          {
            fetchData.slice(0,9).map((item)=>(
              <li key={item.id}>
                  <h1>{item.title}</h1>
                  <img src={item.url} alt={item.title} width='100px' height='100px'/>
              </li>
            ))
          }
          </ul>
        )
      }
        </h1>
      
  

          <h1>Hello React</h1>
          <Top/>
    </UsernameContex.Provider>


  );
}

export default App;
