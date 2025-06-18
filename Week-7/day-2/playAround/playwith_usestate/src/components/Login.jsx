import React, { useState } from 'react'

const Login = () => {

    const [ email , setEmail ] = useState('')
    const [ pswd , setPswd  ]   =   useState('')

  return (
    <>
        <div>
            <label htmlFor="email"></label>
            <input 
                id='email'
                name='email'
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
        </div>

         <div>
            <label htmlFor="pswd"></label>
            <input 
                  id = 'pswd'
                  name='pswd'
                  type="password"
                  value={pswd}
                  onChange={(e)=>setPswd(e.target.value)}
            />

        </div>
        
        <button type='submit'>Login</button>
    </>
  )
}

export default Login