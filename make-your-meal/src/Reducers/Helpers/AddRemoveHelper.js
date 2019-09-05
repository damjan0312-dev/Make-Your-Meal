const cartWithoutItem = (cart, item) =>
  cart.filter(cartItem => cartItem.id !== item.id);

const itemInCart = (cart, item) =>
  cart.filter(cartItem => cartItem.id === item.id)[0];

export const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [
        ...cartWithoutItem(cart, item),
        { ...cartItem, quantity: cartItem.quantity + 1 }
      ];
};

export const removeFromCart = (cart, item) => {
  if (item.quantity === 1) {
    if (item.name === "Bun" || item.name === "Meat") {
      return cart;
    } else {
      return [...cartWithoutItem(cart, item)];
    }
  } else {
    return [
      ...cartWithoutItem(cart, item),
      { ...item, quantity: item.quantity - 1 }
    ];
  }
};
