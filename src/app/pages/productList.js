import React from 'react';
import { Link } from 'react-router-dom';

const ProductsListPage = ({ match }) => (
  <div>
    <h2>Choose your product</h2>
    <ul>
      <li>
        <Link to={`${match.url}/1`}>Product 1</Link>
      </li>
      <li>
        <Link to={`${match.url}/2`}>Product 2</Link>
      </li>
      <li>
        <Link to={`${match.url}/3`}>Product 3</Link>
      </li>
    </ul>
  </div>
);

export default ProductsListPage;
