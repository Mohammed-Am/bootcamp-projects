import React from 'react'

import data from '../Exercice3/data.json'
  const programmingSkills = data.Skills.find(skill => skill.Area === "Programming Language")?.SkillSet || [];
  const programmingDev = data.Skills.find(skill => skill.Area === "Web-Based Application Development")?.SkillSet || [];

const Example2 = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-600 mb-6">Programming Languages</h1>
        <ul className="w-full max-w-2xl">
        {programmingSkills.map((skill, index) => (
          <li
            key={skill.Name}
            className="p-4 border rounded-lg shadow-md bg-white mb-4 flex justify-between items-center"
          >
            <span className="text-xl font-semibold text-gray-800">{skill.Name}</span>
            
          </li>
        ))}
      </ul>


            <h1 className="text-4xl font-bold text-purple-600 mb-6">Web-Based Application Developmen</h1>
               <ul className="w-full max-w-2xl">
                    {programmingDev.map((area, index) => (
                    <li
                        key={area.Name}
                        className="p-4 border rounded-lg shadow-md bg-white mb-4 flex justify-between items-center"
                    >
                        <span className="text-xl font-semibold text-gray-800">{area.Name}</span>
                        
                    </li>
                    ))}
              </ul>

    </div>
  )
}


export default Example2