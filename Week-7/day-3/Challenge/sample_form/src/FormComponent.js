import React from 'react';

const FormComponent = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="max-w-lr mx-auto bg-yellow-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sample Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <div className="space-y-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="mr-2"
            /> Male
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="mr-2"
            /> Female
          </label>
        </div>
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Please Choose a destination</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
          <option value="Europe">Europe</option>
        </select>
        <div className="space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="nutsFree"
              checked={formData.nutsFree}
              onChange={handleChange}
              className="mr-2"
            /> Nuts free
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.lactoseFree}
              onChange={handleChange}
              className="mr-2"
            /> Lactose free
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="vegan"
              checked={formData.vegan}
              onChange={handleChange}
              className="mr-2"
            /> Vegan
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="mt-6 bg-teal-800 text-white p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Entered Information:</h3>
        <p className="mb-1">Your name: {formData.firstName} {formData.lastName}</p>
        <p className="mb-1">Your age: {formData.age}</p>
        <p className="mb-1">Your gender: {formData.gender}</p>
        <p className="mb-1">Your destination: {formData.destination}</p>
        <p className="mb-1">Your dietary restrictions:</p>
        <p className="mb-1">Nuts free: {formData.nutsFree ? 'Yes' : 'No'}</p>
        <p className="mb-1">Lactose free: {formData.lactoseFree ? 'Yes' : 'No'}</p>
        <p className="mb-1">Vegan meal: {formData.vegan ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default FormComponent;