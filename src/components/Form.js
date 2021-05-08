import React, { useState } from 'react';

function Form({ setQuery }) {
  const [term, setTerm] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    setQuery(term);
  };
  console.log(`form term`, term);
  console.log();

  return (
    <form onSubmit={handleClick} className="search-form">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter your cityname"
      />
      <button type="button" onClick={handleClick}>
        {' '}
        Search{' '}
      </button>
    </form>
  );
}

export default Form;
