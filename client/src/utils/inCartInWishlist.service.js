export function isAddedToWishList(id, wishlist) {
  return wishlist.some(el => el._id === id);
}
export function isAddedToCart(id, cart) {
  return cart.productsInCart.some(el => el._id === id);
}
