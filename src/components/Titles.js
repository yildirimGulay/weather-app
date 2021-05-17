/** @format */
import React from 'react';

const Titles = ({name}) => {
  //name prpsa cevir
  return (
    <>
      <div className="card"></div>
      <h2 className="title">
        {' '}
        <i className="fa fa-cloud"></i> {name}
      </h2>
    </>
  );
};

export default Titles;
