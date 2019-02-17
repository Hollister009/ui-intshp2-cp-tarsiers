import React from 'react';

const Categories = props => {
  const {
    setCategory,
    getFilteredProducts,
    toggleAvailability,
    updateFiltered,
    updateSkip,
    updateLimit,
    filter
  } = props;

  const setCategories = (e, category) => {
    e.preventDefault();
    const { sizes, brands, price, available } = filter;

    setCategory(category);
    updateSkip(0);
    updateLimit(6);

    const { skip, limit } = filter;
    const params = { sizes, brands, category, price, available, skip, limit };

    params.skip = 0;
    params.limit = 6;
    getFilteredProducts({ params }).then(res => updateFiltered(res.data));
  };

  const categoryPairs = { male: 'Men', female: 'Women', kids: 'Children' };

  const categoriesList = Object.entries(categoryPairs).map(el => {
    const shouldBeHighlighted =
      filter.category === el[0] ? { color: '#ff5912' } : {};

    return (
      <a
        key={el}
        href="null"
        onClick={e => setCategories(e, el[0])}
        style={shouldBeHighlighted}
      >
        {el[1]}
      </a>
    );
  });

  return (
    <div className="filter-block">
      <h3>Categories</h3>
      <ul>
        {categoriesList}
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
