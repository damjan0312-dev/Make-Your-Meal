export const REQUEST_ADDONS = "REQUEST_ADDONS";
export const RECEIVE_ADDONS = "RECEIVE_ADDONS";

export const REQUEST_DRINKS = "REQUEST_DRINKS";
export const RECEIVE_DRINKS = "REQUEST_DRINKS";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";

export const ADD_ORDER = "ADD_ORDER";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";

export const REMOVE_CART_SUCCESS = "REMOVE_CART_SUCCESS";

export const request_addons = () => ({
  type: REQUEST_ADDONS
});

export const receive_addons = payload => ({
  type: RECEIVE_ADDONS,
  payload
});

export const request_drinks = () => ({
  type: REQUEST_DRINKS
});

export const receive_drinks = payload => ({
  type: RECEIVE_DRINKS,
  payload
});

export const add_to_cart = payload => ({
  type: ADD_TO_CART,
  payload
});

export const add_to_cart_success = payload => ({
  type: ADD_TO_CART_SUCCESS,
  payload
});

export const remove_from_cart = payload => ({
  type: REMOVE_FROM_CART,
  payload
});
export const remove_from_cart_success = payload => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload
});

export const add_order = payload => ({
  type: ADD_ORDER,
  payload
});

export const add_order_success = payload => ({
  type: ADD_ORDER_SUCCESS,
  payload
});

export const remove_cart_success = () => ({
  type: REMOVE_CART_SUCCESS
});
