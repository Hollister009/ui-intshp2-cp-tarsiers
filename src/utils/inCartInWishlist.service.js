export function isAddedToWishList(id, wishlist) {
  return wishlist.includes(id);
}
export function isAddedToCart(id, cart) {
  return cart.productsIds.includes(id);
}
