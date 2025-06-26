import { useState ,useEffect } from 'react';
import './App.css';
import productsData from './product.json'
import Products from './Component/Products';


function App() {
  const [products , setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  

  useEffect(()=>{
      // call api
      const getData = async () => {
            setIsLoading(true)
              await new Promise ( (resolve)  => setTimeout(resolve , Math.random() * 6000 + 5000 ))
              setProducts(productsData)
              setIsLoading(false)
              }
       getData()       
  },[])
  return (
    <>
       
        {isLoading && <h1>loading....</h1>}
        {!isLoading && products && <Products products={products}/>}
    </>
  );
}

export default App;
