import {
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_CART_SUCCESS
} from "../Actions/actions";

import { InitialState } from "./Helpers/CartInitialState";

import { addToCart, removeFromCart } from "./Helpers/AddRemoveHelper";

let cart = [...InitialState];

const cart_reducer = (state = [...cart], { type, payload }) => {
  switch (type) {
    case ADD_TO_CART_SUCCESS:
      return addToCart(state, payload);
    case REMOVE_FROM_CART_SUCCESS:
      return removeFromCart(state, payload);
    case REMOVE_CART_SUCCESS: {
      cart = [...InitialState];
      return cart;
    }
    default:
      return state;
  }
};

export default cart_reducer;
