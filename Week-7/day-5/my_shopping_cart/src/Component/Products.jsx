import StarImage from '../assets/image/star-svgrepo-com (1).svg'
const Products = ({products}) => {
  return (
    <>
         <ul style={{display: 'flex', gap:'16px' , listStyleType:'none'}}>
         {
            products.map((product,index) => (
              <li key={index}>
                   <img src={product.img} alt={product.title} width='100px' height='100px'/>
                    <p>{product.title}</p>
                    <p>Rate: 
                      {Array(product.rate)
                       .fill(0)
                       .map((_,index) => (
                          <img 
                            key={index}
                             src={StarImage}
                             alt='star Icon'
                             width='16px'
                             height='16px' 
                          />
                       ))
                      
                      }
                       
                      </p>
                    <p>Price: <strong>{Number(product.price).toLocaleString()}</strong> $</p>
                    <p>InstedOf: <strong style={{textDecoration:'line-through'}}>{Number(product.instedOff).toLocaleString()}</strong> $</p>
              
              
              </li>
          ))}
     </ul>
    </>
    
  )
}

export default Products