import React, { useState } from 'react';
import FormComponent from './FormComponent';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      destination: formData.destination,
      ...(formData.nutsFree && { nutsFree: 'on' }),
      ...(formData.lactoseFree && { lactoseFree: 'on' }),
      ...(formData.vegan && { vegan: 'on' }),
    }).toString();
    window.location.href = `http://localhost:3000/?${queryParams}`;
  };

  return (
    <div className="App">
      <FormComponent formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;