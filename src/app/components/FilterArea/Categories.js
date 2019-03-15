import React from 'react';

const Categories = props => {
  const { setCategory, toggleAvailability, filter } = props;

  const handleCategoryChange = (e, category) => {
    e.preventDefault();
    setCategory(category);
  };

  const categoryPairs = { male: 'Men', female: 'Women', kids: 'Children' };

  const categoriesList = Object.entries(categoryPairs).map(el => {
    const shouldBeHighlighted =
      filter.category === el[0] ? { color: '#ff5912' } : {};

    return (
      <a
        key={el}
        href="null"
        onClick={e => handleCategoryChange(e, el[0])}
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
