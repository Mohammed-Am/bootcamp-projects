import React, { useRef, useState } from 'react';

function CharacterCounter() {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length);
    }
  };

  return (
    <div>
      <h2>Character Counter</h2>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Start typing here..."
        rows="5"
        cols="50"
      ></textarea>
      <p>Character Count: {charCount}</p>
    </div>
  );
}

export default CharacterCounter;
