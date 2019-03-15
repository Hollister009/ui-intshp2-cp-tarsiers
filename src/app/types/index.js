import { number, bool, string, shape, arrayOf, objectOf } from 'prop-types';

export const productType = shape({
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

export const cartType = shape({
  value: number.isRequired,
  productsIds: arrayOf(string).isRequired,
  orders: arrayOf(
    shape({
      title: string,
      price: number,
      quantity: number,
      size: string
    })
  ).isRequired
});
