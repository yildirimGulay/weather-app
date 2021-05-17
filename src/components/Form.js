/** @format */

import React, { useState, useEffect } from "react";

function Form({ setQuery }) {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  console.log('term:',term );
  console.log('debounce:', debouncedTerm);
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  const handleClick = (e) => {
    e.preventDefault();

    setQuery(debouncedTerm);
  };

  return (
    <form onSubmit={handleClick} className="search-form">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter your cityname"
      />
      <button type="button" onClick={handleClick}>
        {" "}
        Search{" "}
      </button>
    </form>
  );
}

export default Form;
