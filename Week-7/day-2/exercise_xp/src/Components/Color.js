import React, { useEffect, useState } from 'react'

const Color = () => {
    const [favoriteColor , setFavoriteColor] = useState('red');

    useEffect( () => {
            return () =>{
                alert('useEffect reached')
                setFavoriteColor('yellow')
            }
    },[])

    const change = ()=>{
            setFavoriteColor('blue')
    }
  return (
       <>
            <div style={{ border : '1px solid gray',  width: '350px', marginLeft: 'auto' , marginRight: 'auto'}}>My favorite Color is {favoriteColor} </div>

            <button onClick={change}>CHANGE VALUE</button>
       </> 
      
  )
}

export default Color