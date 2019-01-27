import React from 'react';

const Categories = props => {
  const { setCategory, getFilteredProducts } = props;

  const setCategories = (e, category) => {
    e.preventDefault();
    const { sizes, brands } = props.filter;

    // console.log('categories cl ', sizes, brands, category);
    setCategory(category);

    getFilteredProducts(sizes, brands, category);
  };

  return (
    <div className="filter-block">
      <h3>Categories</h3>
      <ul>
        <a href="null" onClick={e => setCategories(e, 'male')}>
          Men
        </a>
        <a href="null" onClick={e => setCategories(e, 'female')}>
          Women
        </a>
        <a href="null" onClick={e => setCategories(e, 'kids')}>
          Children
        </a>
        <a href="null" onClick={e => setCategories(e, 'available')}>
          Available
        </a>
      </ul>
    </div>
  );
};

export default Categories;
