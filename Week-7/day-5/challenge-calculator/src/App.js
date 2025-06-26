import { useState } from 'react';
import './App.css'; 

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const addTwoNumbers = () => {
    const sum = Number(number1) + Number(number2);
    setResult(sum);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Number Adder
        </h1>
        <div className="flex space-x-4 mb-4">
          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
            placeholder="First number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
            placeholder="Second number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <button
          onClick={addTwoNumbers}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
        >
          Add Them!
        </button>
        {result !== '' && (
          <h2 className="text-xl font-semibold text-gray-800 text-center mt-6">
            Result: {result}
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;