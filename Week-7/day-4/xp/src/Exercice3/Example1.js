import React from 'react'

import data from '../Exercice3/data.json'



const Example1 = () => {
  return (
    <>
        <ul>
            <li>
                {
                 data.SocialMedias.map(social =>(
                        <h1>{social}</h1>
                        ))
                }
            </li>
        </ul>
        
    </>
  )
}

export default Example1