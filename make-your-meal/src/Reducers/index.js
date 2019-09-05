import { combineReducers } from "redux";
import addons_reducer from "./addonsReducer";
import cart_reducer from "./cartReducer";
import add_order_reducer from "./addOrderReducer";

export default combineReducers({
  addons_reducer: addons_reducer,
  cart_reducer: cart_reducer,
  add_order_reducer: add_order_reducer
});
