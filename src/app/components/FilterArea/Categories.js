import React from 'react';

const Categories = props => {
  const { setCategory } = props;

  return (
    <div className="field-block">
      <h3>Categories</h3>
      <ul>
        <li onClick={() => setCategory('men')}>Men</li>
        <li onClick={() => setCategory('women')}>Women</li>
        <li onClick={() => setCategory('children')}>Children </li>
        <li onClick={() => setCategory('hotDeals')}>Hot Deals</li>
      </ul>
    </div>
  );
};

export default Categories;
