import { number, bool, string, shape, arrayOf, objectOf } from 'prop-types';

const productType = shape({
  available: bool,
  brand: string,
  category: string,
  colorUrls: objectOf(string),
  colors: arrayOf(string).isRequired,
  price: number.isRequired,
  sizes: arrayOf(string).isRequired,
  src: string.isRequired,
  title: string.isRequired,
  _id: string.isRequired
});

export default productType;
