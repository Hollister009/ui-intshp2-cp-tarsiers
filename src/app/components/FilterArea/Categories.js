import React from 'react';

const Categories = props => {
  const {
    setCategory,
    getFilteredProducts,
    toggleAvailability,
    updateFiltered
  } = props;

  const setCategories = (e, category) => {
    e.preventDefault();
    const { sizes, brands, price, available } = props.filter;

    // console.log('categories cl ', sizes, brands, category);
    setCategory(category);

    getFilteredProducts(
      sizes,
      brands,
      category,
      price,
      available,
      0,
      1000
    ).then(res => updateFiltered(res.data));
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
        <label
          htmlFor="availability"
          className="filter__label--show-available filter-option-container"
        >
          Available
          <input
            id="availability"
            type="checkbox"
            onChange={toggleAvailability}
          />
          <span className="checkmark" />
        </label>
      </ul>
    </div>
  );
};

export default Categories;
