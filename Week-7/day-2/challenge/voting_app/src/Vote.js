import React from 'react';

const Vote = ({ lang, vote, set, index }) => {
  const addVote = () => {
    set((prevLanguages) => {
      const updatedLanguages = [...prevLanguages];
      updatedLanguages[index] = { ...updatedLanguages[index], votes: vote + 1 };
      return updatedLanguages;
    });
  };

  return (
    <ul className="max-w-md mx-auto">
      <li className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-gray-800">{vote}</span>
          <span className="text-lg text-gray-600">{lang}</span>
        </div>
        <button
          onClick={addVote}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
        >
          Vote
        </button>
      </li>
    </ul>
  );
};

export default Vote;