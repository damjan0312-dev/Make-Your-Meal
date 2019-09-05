export const reducer = (accumulator, item) => {
  if (item.new_price > 0) return accumulator + item.new_price * item.quantity;
  else return accumulator + item.price * item.quantity;
};
