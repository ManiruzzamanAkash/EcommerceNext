const calculateCartSubTotal = (carts) => {
  let subTotal = 0;
  if (carts.length > 0) {
    carts.forEach((cart) => {
      const price = cart.offer_price === null ? cart.price : cart.offer_price;
      const total = price * cart.qty;
      subTotal += total;
    });
  }
  return subTotal;
};

export default calculateCartSubTotal;
