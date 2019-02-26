export function isAddedToWishList(id, wishlist) {
  return wishlist.includes(id);
}
export function isAddedToCart(id, cart) {
  for (let i = 0; i < cart.productsInCart.length; i++) {
    if (cart.productsInCart[i]._id === id) {
      return true;
    }
  }
  return false;
}
