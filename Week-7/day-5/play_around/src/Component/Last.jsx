import React, { useContext } from 'react'
import { UsernameContex } from '../App'

const   Last = () => {
    const username = useContext(UsernameContex)
  return (
    /*
    {Whithot Hooks}
     <UsernameContex.Consumer>
          {(username)=>{
            return  <h1>My username is {username}</h1>
          }}
     </UsernameContex.Consumer>
     */
    <>
       <h1>My username is {username}</h1>
    </>
  )
}

export default Last